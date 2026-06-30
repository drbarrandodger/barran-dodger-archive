import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NuclearDownloadButton } from "@/components/NuclearDownloadButton";

export default function NuclearDownloadPage() {
  return (
    <div className="min-h-screen bg-[#050200]">
      <SEO
        title="Nuclear Archive Download | Barran Dodger"
        description="Download the complete Barran Dodger archive — every gospel, testimony, forensic analysis, ICC submission, and government document in one ZIP file. 169+ documents. Blockchain-verified."
        path="/nuclear-download"
        keywords="download all whistleblower documents ZIP Australia, complete evidence archive one file download, Barran Dodger nuclear download, every document free download, blockchain verified evidence ZIP, gospels testimony forensic analysis one download, ICC submission complete download, government documents free archive, Dr Richard McLean complete works download, whistleblower documents free Australia 2025, all 3643 documents download, SHA-256 verified archive download, Bitcoin Block 897241 sealed archive"
      />
      <Navigation />

      <div
        style={{ paddingTop: "calc(var(--nav-height, 64px) + 24px)" }}
        className="pb-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <NuclearDownloadButton />
        </div>
      </div>

      <Footer />
    </div>
  );
}
