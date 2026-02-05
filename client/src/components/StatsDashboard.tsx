import { motion } from "framer-motion";
import { 
  FileText, 
  Building2, 
  Calendar, 
  Shield, 
  AlertTriangle, 
  Scale,
  Users,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { 
    label: "Total Documents", 
    value: "240+", 
    icon: FileText, 
    color: "text-primary",
    description: "Blockchain-verified evidence files"
  },
  { 
    label: "Government Agencies", 
    value: "35+", 
    icon: Building2, 
    color: "text-red-500",
    description: "Agencies documented in cover-up"
  },
  { 
    label: "Years of Evidence", 
    value: "35", 
    icon: Calendar, 
    color: "text-blue-500",
    description: "Spanning 1990 to 2026"
  },
  { 
    label: "SHA-256 Verified", 
    value: "100%", 
    icon: Shield, 
    color: "text-green-500",
    description: "Cryptographically sealed"
  }
];

const categories = [
  { name: "OAIC Corruption", count: 15, severity: "critical" },
  { name: "NDIS Fraud", count: 12, severity: "critical" },
  { name: "Commonwealth Ombudsman", count: 8, severity: "high" },
  { name: "Medical Malpractice", count: 10, severity: "critical" },
  { name: "Police Harassment", count: 6, severity: "high" },
  { name: "FOI Refusals", count: 14, severity: "medium" },
  { name: "Tribunal Records", count: 18, severity: "medium" },
  { name: "Whistleblower Retaliation", count: 22, severity: "critical" }
];

const timeline = [
  { year: "2018", event: "Initial whistleblowing", type: "origin" },
  { year: "2019", event: "Institutional rejection begins", type: "persecution" },
  { year: "2020", event: "Medical abuse documented", type: "critical" },
  { year: "2021", event: "Mass agency rejections", type: "persecution" },
  { year: "2022", event: "Digital identity destroyed", type: "critical" },
  { year: "2023", event: "Federal Court PID assessment", type: "legal" },
  { year: "2024", event: "Ombudsman service restriction", type: "persecution" },
  { year: "2025", event: "Blockchain archive created", type: "evidence" },
  { year: "2026", event: "240+ documents verified", type: "milestone" }
];

export function StatsDashboard() {
  return (
    <section className="py-16" data-testid="stats-dashboard">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1.5 font-bold">
          EVIDENCE OVERVIEW
        </Badge>
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">The Numbers Don't Lie</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A statistical overview of the documented evidence against Australian government institutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center hover-elevate">
              <CardContent className="pt-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[hsl(38,92%,50%)]" />
              Evidence by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categories.map((cat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="font-medium text-foreground">{cat.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={cat.severity === "critical" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {cat.count} docs
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Persecution Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 text-xs font-bold
                      ${item.type === "critical" ? "bg-red-500 text-white" : 
                        item.type === "persecution" ? "bg-orange-500 text-white" :
                        item.type === "legal" ? "bg-blue-500 text-white" :
                        item.type === "milestone" ? "bg-green-500 text-white" :
                        "bg-primary text-primary-foreground"}`}
                    >
                      {item.year.slice(-2)}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm font-medium text-foreground">{item.event}</p>
                      <p className="text-xs text-muted-foreground">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
