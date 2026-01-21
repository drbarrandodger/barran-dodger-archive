import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            >
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-serif font-bold text-primary mb-4">Contact Us</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We welcome inquiries from the public, legal professionals, and those seeking to support our mission.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-border shadow-sm">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">General Inquiries</h3>
                      <p className="text-sm text-muted-foreground mb-2">For questions about our mission or documentation.</p>
                      <div className="flex flex-col gap-1">
                        <a href="mailto:barrandodger@icloud.com" className="text-primary font-medium hover:underline text-sm">barrandodger@icloud.com</a>
                        <a href="tel:+61431167907" className="text-primary font-medium hover:underline text-sm">+61 431 167 907</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-border shadow-sm">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        Registered Non-Profit Address<br />
                        VIC 3173<br />
                        Australia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Media Inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For press requests, please use the form and select "Media Inquiry" as the subject. We aim to respond to verified media within 48 hours.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-border shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Reason for contact" {...field} value={field.value || ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                      disabled={isPending}
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
