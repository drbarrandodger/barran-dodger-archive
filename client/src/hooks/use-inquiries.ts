import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to send inquiry');
      }
      
      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Received",
        description: "Thank you for contacting us. We have received your enquiry and will respond to you at the email address provided as soon as possible.",
        duration: 8000,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
