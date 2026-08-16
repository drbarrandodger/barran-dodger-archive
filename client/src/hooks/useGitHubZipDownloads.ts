/**
 * useGitHubZipDownloads
 *
 * Fetches live download counts for the two ZIP release assets directly from
 * GitHub's public Releases API.  No authentication required — works on any
 * domain including the static GitHub Pages mirror at
 * drbarrandodger.github.io/barran-dodger-archive.
 *
 * GitHub API: GET /repos/{owner}/{repo}/releases/{id}/assets
 * Returns `download_count` per asset — updated in real time by GitHub.
 *
 * Release: zip-archives-2026-08-17  (id 371450464)
 */

import { useState, useEffect } from "react";

const RELEASE_ASSETS_URL =
  "https://api.github.com/repos/drbarrandodger/barran-dodger-archive/releases/371450464/assets";

const GOV_ASSET_NAME   = "barrandodger-government-documents-complete.zip";
const PROPHET_ASSET_NAME = "barrandodger-prophetic-papers-complete.zip";

interface ZipDownloadCounts {
  govDocs:   number | null;   // download_count for government docs ZIP
  prophetic: number | null;   // download_count for prophetic papers ZIP
  loading:   boolean;
  error:     boolean;
}

// Module-level cache — prevents duplicate fetches when multiple components
// mount on the same page.  Resets on full page reload.
let cached: { govDocs: number; prophetic: number } | null = null;
let fetchPromise: Promise<{ govDocs: number; prophetic: number }> | null = null;

function fetchCounts(): Promise<{ govDocs: number; prophetic: number }> {
  if (cached) return Promise.resolve(cached);
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch(RELEASE_ASSETS_URL, {
    headers: { Accept: "application/vnd.github+json" },
    // 60-second browser cache — fine for a download counter
    cache: "no-store",
  })
    .then((r) => {
      if (!r.ok) throw new Error(`GitHub API ${r.status}`);
      return r.json() as Promise<
        Array<{ name: string; download_count: number }>
      >;
    })
    .then((assets) => {
      const govAsset   = assets.find((a) => a.name === GOV_ASSET_NAME);
      const propAsset  = assets.find((a) => a.name === PROPHET_ASSET_NAME);
      const result = {
        govDocs:   govAsset?.download_count   ?? 0,
        prophetic: propAsset?.download_count  ?? 0,
      };
      cached = result;
      fetchPromise = null;
      return result;
    })
    .catch(() => {
      fetchPromise = null;
      throw new Error("fetch failed");
    });

  return fetchPromise;
}

export function useGitHubZipDownloads(): ZipDownloadCounts {
  const [state, setState] = useState<ZipDownloadCounts>({
    govDocs:   cached?.govDocs   ?? null,
    prophetic: cached?.prophetic ?? null,
    loading:   cached === null,
    error:     false,
  });

  useEffect(() => {
    if (cached) return; // already resolved
    fetchCounts()
      .then(({ govDocs, prophetic }) =>
        setState({ govDocs, prophetic, loading: false, error: false })
      )
      .catch(() =>
        setState((s) => ({ ...s, loading: false, error: true }))
      );
  }, []);

  return state;
}

/** Format a download count as a human-readable string e.g. "1,234 downloads" */
export function formatDownloads(n: number | null): string {
  if (n === null) return "";
  return n.toLocaleString() + " downloads";
}
