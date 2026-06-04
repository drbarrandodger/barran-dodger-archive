import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, AlertTriangle, Ban, Gavel, Building2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { trackDownload, DownloadBadge } from "@/components/DownloadCounter";

import agLetterImg from "@assets/IMG_3189_1770285738511.png";

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function ResponseModal({ isOpen, onClose, title, children }: ResponseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-primary flex items-center gap-2">
            <FileText className="w-5 h-5" />
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function GovernmentResponses() {
  const [primeMinisterModal, setPrimeMinisterModal] = useState(false);
  const [ndisModal, setNdisModal] = useState(false);
  const [federalCourtModal, setFederalCourtModal] = useState(false);
  const [ombudsmanModal, setOmbudsmanModal] = useState(false);

  return (
    <section className="py-12 px-4 bg-destructive/5 border-y border-destructive/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Badge variant="destructive" className="mb-4" data-testid="badge-government-responses">
            <AlertTriangle className="w-3 h-3 mr-1" />
            OFFICIAL GOVERNMENT RESPONSES
          </Badge>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
            Documented Institutional Failures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click each item to view official government letters confirming these facts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card 
            className="cursor-pointer hover-elevate border-primary/30 bg-card/50"
            onClick={() => setPrimeMinisterModal(true)}
            data-testid="card-prime-minister-response"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Prime Minister Notified</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Attorney-General's Department confirmed correspondence to <strong>PM Anthony Albanese</strong> was received and referred to the Attorney-General.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">ASIO</Badge>
                    <Badge variant="outline" className="text-xs">IGIS</Badge>
                    <Badge variant="outline" className="text-xs">Attorney-General</Badge>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-primary" data-testid="button-view-pm-letter">
                    View Official Letter <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover-elevate border-destructive/30 bg-card/50"
            onClick={() => setOmbudsmanModal(true)}
            data-testid="card-ombudsman-ban"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Ban className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Banned from Ombudsman</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Commonwealth Ombudsman has restricted contact - the very agency meant to protect citizens from government abuse has silenced the victim.
                  </p>
                  <a 
                    href="https://www.ombudsman.gov.au/complaints" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Commonwealth Ombudsman <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover-elevate border-destructive/30 bg-card/50"
            onClick={() => setNdisModal(true)}
            data-testid="card-ndis-ban"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Ban className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Banned from NDIS & DSS Contact</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    12-month ban from all NDIA offices in Australia. Threatened with prosecution under Public Order Act. A disabled whistleblower silenced.
                  </p>
                  <a 
                    href="https://www.ndis.gov.au" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    NDIS Official Site <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover-elevate border-primary/30 bg-card/50"
            onClick={() => setFederalCourtModal(true)}
            data-testid="card-federal-court"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Gavel className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Federal Court: Employment Confirmed</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Scott Tredwell (General Counsel) confirmed <strong>malfeasance of public office</strong>, perverting justice, and danger to health — then <strong>refused to protect</strong>.
                  </p>
                  <Badge variant="destructive" className="text-xs">
                    Acknowledged but Abandoned
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <ResponseModal 
          isOpen={primeMinisterModal} 
          onClose={() => setPrimeMinisterModal(false)}
          title="Attorney-General's Response - Prime Minister Notified"
        >
          <div className="space-y-4">
            <img src={agLetterImg} 
              alt="Attorney-General's Department Letter - 19 September 2023"
              className="w-full rounded-lg border shadow-lg" loading="lazy" decoding="async" />
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Key Points from Official Letter:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Email of 5 July 2023 to <strong>Prime Minister Anthony Albanese</strong> was received</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Correspondence referred to <strong>Attorney-General Mark Dreyfus KC MP</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Concerns about <strong>ASIO</strong> conduct noted - referred to <strong>IGIS</strong> (Inspector-General of Intelligence and Security)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Told to contact Commonwealth Ombudsman - <strong>same agency that later banned contact</strong></span>
                </li>
              </ul>
            </div>
            <div className="flex gap-2">
              <a 
                href="https://www.pm.gov.au/contact-your-pm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  Contact Prime Minister <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </a>
              <a 
                href="https://www.igis.gov.au/complaints" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  IGIS Complaints <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </ResponseModal>

        <ResponseModal 
          isOpen={ndisModal} 
          onClose={() => setNdisModal(false)}
          title="NDIA Communication Ban - 17 March 2025"
        >
          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
              <h4 className="font-bold text-destructive mb-2">12-MONTH TOTAL BAN</h4>
              <p className="text-sm">
                Effective 17 March 2025, Dr. McLean is banned from all NDIA offices in Australia, threatened with prosecution under S20(1) Public Order Act.
              </p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">From Official NDIA Letter:</h4>
              <blockquote className="italic text-sm border-l-4 border-primary pl-4 my-3">
                "Effective from Monday, 17 March 2025, face to face services will continue to be withdrawn for a 12-month period. This means you are not permitted to attend or enter any NDIA office in Australia, including our Partners in the Community."
              </blockquote>
              <blockquote className="italic text-sm border-l-4 border-destructive pl-4 my-3">
                "If you do not comply with these instructions, police will be contacted immediately, and you may be liable for prosecution..."
              </blockquote>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">The Irony:</h4>
              <p className="text-sm text-muted-foreground">
                A disabled whistleblower seeking protection is instead threatened with prosecution by the very agency meant to support people with disabilities. The NDIS has weaponized administrative power against a vulnerable person.
              </p>
            </div>

            <a 
              href="/attached_assets/Communicating_with_the_NDIS_-_Richard_McLean_430938559_1770285833343.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDownload("/attached_assets/Communicating_with_the_NDIS_-_Richard_McLean_430938559_1770285833343.pdf")}
              data-testid="link-download-ndia-letter"
            >
              <Button variant="default" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                View Full NDIA Letter (PDF)
                <DownloadBadge url="/attached_assets/Communicating_with_the_NDIS_-_Richard_McLean_430938559_1770285833343.pdf" />
              </Button>
            </a>
          </div>
        </ResponseModal>

        <ResponseModal 
          isOpen={federalCourtModal} 
          onClose={() => setFederalCourtModal(false)}
          title="Federal Court Assessment - Scott Tredwell, General Counsel"
        >
          <div className="space-y-4">
            <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">EMPLOYMENT STATUS CONFIRMED</h4>
              <p className="text-sm">
                Scott Tredwell confirmed Dr. McLean is a "public official" under the Public Interest Disclosure Act - an employee with the Department of Social Services.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">What Scott Tredwell Acknowledged:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Gavel className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Perverts, or attempts to pervert, the course of justice</strong> (Section 29 Item 3(a) PID Act)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gavel className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Maladministration</strong> (Section 29 Item 4 PID Act)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gavel className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Unreasonably results in danger to health or safety</strong> (Section 29 Item 8 PID Act)</span>
                </li>
              </ul>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
              <h4 className="font-bold text-destructive mb-2">BUT THEN REFUSED TO PROTECT</h4>
              <blockquote className="italic text-sm border-l-4 border-destructive pl-4 my-3">
                "As I am not satisfied that your disclosure meets the requirement of the PID Act to be an internal disclosure, I must decide... not to allocate the handling of that disclosure to any agency."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                The Federal Court General Counsel acknowledged the disclosures showed <strong>malfeasance of public office</strong>, perverting justice, and danger to life — then used a technical loophole to refuse protection to a legitimate public official.
              </p>
            </div>

            <a 
              href="/attached_assets/2023_03_27_Final_Assessment_-_Dr_Rich_McLean_1770285922194.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDownload("/attached_assets/2023_03_27_Final_Assessment_-_Dr_Rich_McLean_1770285922194.pdf")}
              data-testid="link-download-federal-court-letter"
            >
              <Button variant="default" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                View Full Federal Court Letter (PDF)
                <DownloadBadge url="/attached_assets/2023_03_27_Final_Assessment_-_Dr_Rich_McLean_1770285922194.pdf" />
              </Button>
            </a>
          </div>
        </ResponseModal>

        <ResponseModal 
          isOpen={ombudsmanModal} 
          onClose={() => setOmbudsmanModal(false)}
          title="Commonwealth Ombudsman - Contact Restricted"
        >
          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
              <h4 className="font-bold text-destructive mb-2">BANNED FROM THE WATCHDOG</h4>
              <p className="text-sm">
                The Commonwealth Ombudsman — the agency specifically created to investigate government misconduct — has restricted contact with Dr. McLean.
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">The Systematic Pattern:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Attorney-General's Department said to contact Ombudsman</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Ombudsman then restricted contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>NDIS imposed 12-month total ban</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Federal Court acknowledged crimes but refused protection</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Every avenue for redress has been systematically closed. This is coordinated institutional abuse documented across multiple government agencies.
              </p>
            </div>

            <a 
              href="https://www.ombudsman.gov.au" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                Commonwealth Ombudsman Website <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </ResponseModal>
      </div>
    </section>
  );
}
