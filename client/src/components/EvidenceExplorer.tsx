import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  FileText, 
  Link2, 
  ChevronRight,
  Shield,
  AlertTriangle,
  Scale,
  Database,
  Users,
  Hospital,
  Landmark
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const catMedical = "/images/cat-medical.png";
const catLegal = "/images/cat-legal.png";
const catNdis = "/images/cat-ndis.png";

interface Agency {
  id: string;
  name: string;
  shortName: string;
  icon: any;
  category: "oversight" | "government" | "medical" | "legal" | "private";
  documentCount: number;
  severity: "critical" | "high" | "medium";
  description: string;
  connections: string[];
}

const agencies: Agency[] = [
  {
    id: "oaic",
    name: "Office of the Australian Information Commissioner",
    shortName: "OAIC",
    icon: Building2,
    category: "oversight",
    documentCount: 15,
    severity: "critical",
    description: "Dismissed privacy complaints, refused FOI requests, coordinated with other agencies",
    connections: ["ombudsman", "micron21", "apra"]
  },
  {
    id: "ombudsman",
    name: "Commonwealth Ombudsman",
    shortName: "Ombudsman",
    icon: Scale,
    category: "oversight",
    documentCount: 8,
    severity: "critical",
    description: "Issued service restrictions, refused to investigate complaints, PID assessment filed",
    connections: ["oaic", "federal-court", "ndis"]
  },
  {
    id: "mercy",
    name: "Mercy Hospital / Salt Water Clinic",
    shortName: "Mercy Hospital",
    icon: Hospital,
    category: "medical",
    documentCount: 10,
    severity: "critical",
    description: "Medication denial, suicide attempt under care, MHCC complaint blocked",
    connections: ["mhcc", "vcat"]
  },
  {
    id: "micron21",
    name: "Micron21 Pty Ltd",
    shortName: "Micron21",
    icon: Database,
    category: "private",
    documentCount: 6,
    severity: "critical",
    description: "Destroyed 20 years of digital identity and evidence during hospitalization",
    connections: ["oaic"]
  },
  {
    id: "ndis",
    name: "National Disability Insurance Agency",
    shortName: "NDIA",
    icon: Users,
    category: "government",
    documentCount: 5,
    severity: "high",
    description: "Guardianship concerns, relocation restrictions, ministerial referrals",
    connections: ["ombudsman"]
  },
  {
    id: "apra",
    name: "Australian Prudential Regulation Authority",
    shortName: "APRA",
    icon: Landmark,
    category: "government",
    documentCount: 3,
    severity: "high",
    description: "Whistleblower rejection, Peter Dunstan case documentation",
    connections: ["oaic"]
  },
  {
    id: "federal-court",
    name: "Federal Court of Australia",
    shortName: "Federal Court",
    icon: Scale,
    category: "legal",
    documentCount: 2,
    severity: "medium",
    description: "PID Act assessment confirming disclosable conduct",
    connections: ["ombudsman", "ag"]
  },
  {
    id: "mhcc",
    name: "Mental Health Complaints Commissioner",
    shortName: "MHCC",
    icon: AlertTriangle,
    category: "oversight",
    documentCount: 4,
    severity: "high",
    description: "Complaint investigation compromised, lawyer involvement exposed",
    connections: ["mercy", "vcat"]
  }
];

const categoryColors = {
  oversight: "bg-blue-500",
  government: "bg-purple-500",
  medical: "bg-red-500",
  legal: "bg-green-500",
  private: "bg-orange-500"
};

export function EvidenceExplorer() {
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);
  const [hoveredAgency, setHoveredAgency] = useState<string | null>(null);

  const getConnectedAgencies = (agencyId: string) => {
    const agency = agencies.find(a => a.id === agencyId);
    return agency ? agency.connections : [];
  };

  return (
    <section className="py-16" data-testid="evidence-explorer">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1.5 font-bold">
          INTERACTIVE MAP
        </Badge>
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Evidence Explorer</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Click on any agency to see connections and documentation. Lines show documented coordination between entities.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {agencies.map((agency) => {
              const isConnected = hoveredAgency ? getConnectedAgencies(hoveredAgency).includes(agency.id) : false;
              const isSelected = selectedAgency?.id === agency.id;
              
              return (
                <motion.div
                  key={agency.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer ${isConnected ? 'ring-2 ring-[hsl(38,92%,50%)]' : ''}`}
                  onClick={() => setSelectedAgency(agency)}
                  onMouseEnter={() => setHoveredAgency(agency.id)}
                  onMouseLeave={() => setHoveredAgency(null)}
                  data-testid={`agency-card-${agency.id}`}
                >
                  <Card className={`h-full transition-all overflow-hidden ${isSelected ? 'border-primary bg-primary/5' : 'hover-elevate'}`}>
                    <div className="aspect-square relative w-full overflow-hidden border-b border-border/50">
                      <img src={
                          agency.category === 'medical' ? catMedical :
                          agency.category === 'legal' ? catLegal :
                          agency.category === 'government' ? catNdis :
                          agency.category === 'oversight' ? catLegal :
                          catNdis
                        } 
                        alt={agency.shortName} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100" loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center ${categoryColors[agency.category]}`}>
                        <agency.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <p className="font-medium text-sm text-foreground mb-1">{agency.shortName}</p>
                      <Badge 
                        variant={agency.severity === "critical" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {agency.documentCount} docs
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {Object.entries(categoryColors).map(([category, color]) => (
              <div key={category} className="flex items-center gap-2 text-sm">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <span className="text-muted-foreground capitalize">{category}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {selectedAgency ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              data-testid="agency-details-panel"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${categoryColors[selectedAgency.category]}`}>
                      <selectedAgency.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{selectedAgency.name}</h3>
                      <Badge variant={selectedAgency.severity === "critical" ? "destructive" : "secondary"} className="mt-1">
                        {selectedAgency.severity.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-foreground mb-4">{selectedAgency.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">CONNECTED AGENCIES:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedAgency.connections.map(connId => {
                        const conn = agencies.find(a => a.id === connId);
                        return conn ? (
                          <Badge 
                            key={connId} 
                            variant="outline" 
                            className="cursor-pointer hover:bg-primary/10"
                            onClick={() => setSelectedAgency(conn)}
                          >
                            <Link2 className="h-3 w-3 mr-1" />
                            {conn.shortName}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      <FileText className="h-4 w-4 inline mr-1" />
                      {selectedAgency.documentCount} documents
                    </span>
                    <Link href="/evidence">
                      <Button variant="outline" size="sm" className="gap-1">
                        View <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                <Shield className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Select an agency to see details and connections</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/case-studies">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" /> View Detailed Case Studies
          </Button>
        </Link>
      </div>
    </section>
  );
}
