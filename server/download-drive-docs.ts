import { ReplitConnectors } from "@replit/connectors-sdk";
import * as fs from "fs";
import * as path from "path";

const connectors = new ReplitConnectors();
const OUTPUT_DIR = path.join(process.cwd(), "github-pages-deploy", "documents");

const TO_DOWNLOAD = [
  { id: "1jgd11ujMPCzd96OcTjRLDqZOxq8MIjZL", filename: "comprehensive-case-systematic-persecution.pdf" },
  { id: "1G4xkfB5MhxN470Bnr4O9_XTTQUj0Te7k", filename: "josephs-coat-barrans-mantle-prophetic-parallel.pdf" },
  { id: "19qYVBE9IeCa8pmvv39q9jtzZZH9EcKW_", filename: "written-reasons-cover-letter-for-parties.pdf" },
  { id: "170xazqPX9BflF16VvuwuJKE1KScgRC87", filename: "version-you-tried-to-destroy-is-gone.pdf" },
  { id: "1Qi0YuQdlMnYz3csx0jYaKL9Hx0jFC7O7", filename: "master-consolidated-legal-record.pdf" },
  { id: "1EKfQEDJJf2AYSiOHSixuzMEf59gTILJn", filename: "the-paper-trail-of-erasure.pdf" },
  { id: "1fEpNlUudjH0RcqYyUv4nwEid_IA05K3K", filename: "dr-horgan-mclean-confidential-psychiatric-assessment.pdf" },
  { id: "1TBh13QyXhhQ_q5O_vRnPh6vFyQAWj7c5", filename: "coag-ndis-government-documentation.pdf" },
  { id: "1HBJbRe5ZUdNHMG-ODIah4H8DUNz7Ty_u", filename: "mclean-comcare-final-legal-proceedings.pdf" },
  { id: "1fk4mqXg4D-7GOfXPu3dqn5syzf6xz81",  filename: "crime-corruption-commission-correspondence.pdf" },
  { id: "1Pflf7NoIcjDd-1XC94VdgfnJbi96N2AQ", filename: "public-statement-dr-richard-mclean.pdf" },
  { id: "1ZlsICKSTNOVG3du4wAC0Hcsrv0y9hXdE", filename: "unhcr-icc-cryptographic-evidence-package.pdf" },
  { id: "17kPS-ms7gb4stU_Io0o-VzwJ1ozmO5Vu", filename: "ndis-plan-approval-nov-2025.pdf" },
  { id: "1dGnnhyq0Mv6Yv652vslK_5Dyb65FLBI8", filename: "immortal-testimony-mclean-2025.pdf" },
  { id: "1dWRT_YlNjZNssPFE6wmAYxPegcyJCC",   filename: "evidence-summary-dr-richard-mclean.pdf" },
];

async function downloadFile(fileId: string, filename: string): Promise<boolean> {
  const outPath = path.join(OUTPUT_DIR, filename);
  if (fs.existsSync(outPath)) {
    console.log(`SKIP (exists): ${filename}`);
    return true;
  }
  try {
    const response = await connectors.proxy(
      "google-drive",
      `/drive/v3/files/${fileId}?alt=media`,
      { method: "GET" }
    );
    if (!response.ok) {
      console.error(`FAIL ${response.status}: ${filename}`);
      return false;
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outPath, Buffer.from(buffer));
    const kb = Math.round(buffer.byteLength / 1024);
    console.log(`OK (${kb}KB): ${filename}`);
    return true;
  } catch (err: any) {
    console.error(`ERROR: ${filename} — ${err.message}`);
    return false;
  }
}

async function main() {
  let ok = 0, fail = 0;
  for (const doc of TO_DOWNLOAD) {
    const success = await downloadFile(doc.id, doc.filename);
    if (success) ok++; else fail++;
  }
  console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
}

main();
