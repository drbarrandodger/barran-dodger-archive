import { useEffect } from "react";

export function useReferralCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const referral =
        params.get("ref") ||
        params.get("referral") ||
        params.get("source");

      if (referral) {
        localStorage.setItem("barran_dodger_referral", referral);
      }
    } catch {
      // Referral tracking is optional and must never prevent the site from loading.
    }
  }, []);
}
