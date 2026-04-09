import { motion } from "framer-motion";
import { Quote, Star, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  type: "supporter" | "expert" | "media";
}

const testimonials: Testimonial[] = [
  {
    quote: "The blockchain verification of evidence is groundbreaking. This level of documentation makes denial impossible.",
    author: "Anonymous Legal Researcher",
    role: "International Human Rights Advocate",
    type: "expert"
  },
  {
    quote: "I've never seen such comprehensive documentation of institutional failure. The AI analysis adds another layer of credibility.",
    author: "Truth Seeker",
    role: "Evidence Archive Reviewer",
    type: "supporter"
  },
  {
    quote: "The systematic nature of the persecution documented here demands international attention.",
    author: "Anonymous Advocate",
    role: "Whistleblower Support Network",
    type: "supporter"
  },
  {
    quote: "2,304 documents with cryptographic proof - this archive represents a new standard for accountability documentation.",
    author: "Blockchain Researcher",
    role: "Digital Evidence Specialist",
    type: "expert"
  }
];

const mediaReferences = [
  { outlet: "Under Investigation", status: "Pending Review" },
  { outlet: "International Human Rights Bodies", status: "UNHRC Submission Filed" },
  { outlet: "Australian Federal Authorities", status: "PID Assessments Documented" }
];

export function TestimonialsSection() {
  return (
    <section className="py-16" data-testid="testimonials-section">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1.5 font-bold">
          VOICES OF SUPPORT
        </Badge>
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">What People Are Saying</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Supporters, researchers, and advocates who have reviewed the evidence archive.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover-elevate">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-primary/30 mb-3" />
                <p className="text-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.type === "expert" && <Shield className="h-3 w-3 mr-1" />}
                    {testimonial.type === "supporter" && <Users className="h-3 w-3 mr-1" />}
                    {testimonial.type === "media" && <Star className="h-3 w-3 mr-1" />}
                    {testimonial.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-secondary/50 rounded-lg p-8 border border-border">
        <div className="text-center mb-6">
          <h3 className="text-xl font-serif font-bold text-primary mb-2">Media & Official Recognition</h3>
          <p className="text-sm text-muted-foreground">Current status of submissions and coverage</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {mediaReferences.map((ref, index) => (
            <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
              <p className="font-medium text-foreground mb-1">{ref.outlet}</p>
              <Badge variant="outline" className="text-xs">{ref.status}</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
