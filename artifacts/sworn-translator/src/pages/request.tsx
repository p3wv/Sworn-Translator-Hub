import { PageWrapper } from "@/components/layout/page-wrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadCloud, CheckCircle2, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  documentType: z.string().min(1, "Please select a document type"),
  sourceLang: z.string().min(1, "Please select source language"),
  targetLang: z.string().min(1, "Please select target language"),
  description: z.string().optional(),
  urgency: z.enum(["standard", "express"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function Request() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      documentType: "",
      sourceLang: "",
      targetLang: "",
      description: "",
      urgency: "standard",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (isSubmitted) {
    return (
      <PageWrapper>
        <div className="container px-4 md:px-8 py-24 flex items-center justify-center min-h-[70vh]">
          <motion.div 
            className="max-w-md w-full bg-card border border-border p-10 text-center shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Request Received</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Thank you for entrusting me with your documents. I will review your request and send a firm quote and timeline to your email within the next 2 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="w-full"
              data-testid="button-new-request"
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="bg-card border-b border-border py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <motion.div className="max-w-3xl" {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground tracking-tight">
              Request a Translation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Provide the details of your document below. You will receive a precise, non-binding quote within 2 hours.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
            
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 md:p-10 border-border shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-serif font-bold text-foreground border-b border-border pb-2">Client Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Full Legal Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} data-testid="input-name" />
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
                              <FormLabel className="text-foreground">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel className="text-foreground">Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+41 XX XXX XX XX" type="tel" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-6 pt-6">
                      <h3 className="text-xl font-serif font-bold text-foreground border-b border-border pb-2">Document Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="documentType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Document Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-doc-type">
                                  <SelectValue placeholder="Select type of document" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="birth_cert">Birth / Marriage Certificate</SelectItem>
                                <SelectItem value="diploma">Diploma / Academic Transcript</SelectItem>
                                <SelectItem value="contract">Legal Contract / Agreement</SelectItem>
                                <SelectItem value="court">Court Decree / Judgment</SelectItem>
                                <SelectItem value="medical">Medical Record</SelectItem>
                                <SelectItem value="corporate">Corporate Document</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="sourceLang"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Source Language</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-source-lang">
                                    <SelectValue placeholder="Language of original" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="en">English</SelectItem>
                                  <SelectItem value="fr">French</SelectItem>
                                  <SelectItem value="de">German</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="targetLang"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Target Language</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-target-lang">
                                    <SelectValue placeholder="Translate into" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="en">English</SelectItem>
                                  <SelectItem value="fr">French</SelectItem>
                                  <SelectItem value="de">German</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="border-2 border-dashed border-border bg-muted/50 p-8 text-center rounded-sm">
                        <UploadCloud className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                        <h4 className="text-foreground font-medium mb-1">Upload Documents</h4>
                        <p className="text-sm text-muted-foreground mb-4">PDF, JPG, or PNG up to 10MB</p>
                        <Button variant="outline" type="button" size="sm" className="bg-background">Select Files</Button>
                        <p className="text-xs text-muted-foreground mt-4 italic">
                          *For this demo, file uploading is simulated.
                        </p>
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Additional Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific requirements for the authority receiving this?" 
                                className="resize-none min-h-[100px]"
                                {...field} 
                                data-testid="textarea-description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-6 pt-6">
                      <h3 className="text-xl font-serif font-bold text-foreground border-b border-border pb-2">Service Level</h3>
                      
                      <FormField
                        control={form.control}
                        name="urgency"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid md:grid-cols-2 gap-4"
                                data-testid="radio-urgency"
                              >
                                <FormItem>
                                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/5 cursor-pointer">
                                    <FormControl>
                                      <RadioGroupItem value="standard" className="sr-only" />
                                    </FormControl>
                                    <div className="border border-border p-4 rounded-sm hover:bg-muted transition-colors h-full flex flex-col justify-center">
                                      <div className="font-bold text-foreground mb-1">Standard Delivery</div>
                                      <div className="text-sm text-muted-foreground">3-4 business days</div>
                                    </div>
                                  </FormLabel>
                                </FormItem>
                                <FormItem>
                                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/5 cursor-pointer">
                                    <FormControl>
                                      <RadioGroupItem value="express" className="sr-only" />
                                    </FormControl>
                                    <div className="border border-border p-4 rounded-sm hover:bg-muted transition-colors h-full flex flex-col justify-center">
                                      <div className="font-bold text-foreground mb-1 flex items-center justify-between">
                                        Express Delivery <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">+50% Surcharge</span>
                                      </div>
                                      <div className="text-sm text-muted-foreground">Within 24-48 hours</div>
                                    </div>
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto h-14 px-10 font-serif text-lg"
                        data-testid="button-submit-request"
                      >
                        Submit Request for Quote
                      </Button>
                      <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        All documents submitted are treated with strict legal confidentiality.
                      </p>
                    </div>

                  </form>
                </Form>
              </Card>
            </motion.div>

            <motion.div 
              className="lg:col-span-4 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-primary text-primary-foreground p-8 rounded-sm shadow-md">
                <h3 className="font-serif font-bold text-xl mb-4">The Process</h3>
                <ol className="space-y-6 relative border-l border-primary-foreground/30 ml-3 pl-6">
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Submit Documents</h4>
                    <p className="text-sm text-primary-foreground/80">Upload clear scans or photos of your original documents.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Receive Quote</h4>
                    <p className="text-sm text-primary-foreground/80">Get a firm, final price and delivery date within 2 hours.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Approve & Pay</h4>
                    <p className="text-sm text-primary-foreground/80">Confirm the quote and make payment to initiate the work.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">4</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Delivery</h4>
                    <p className="text-sm text-primary-foreground/80">Receive the legally certified digital PDF immediately, followed by the physical copy via post.</p>
                  </li>
                </ol>
              </div>

              <div className="bg-card border border-border p-6">
                <h3 className="font-serif font-bold mb-2">Need immediate assistance?</h3>
                <p className="text-sm text-muted-foreground mb-4">For extreme emergencies (court deadlines, border control), please call directly.</p>
                <div className="font-mono text-primary font-bold">+41 22 555 0123</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
