import { PageWrapper } from "@/components/layout/page-wrapper";
import { motion } from "framer-motion";
import { useRef, useState, type ChangeEvent } from "react";
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
  name: z.string().min(2, "Wymagane pełne imię i nazwisko"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().min(5, "Numer telefonu jest wymagany"),
  documentType: z.string().min(1, "Proszę wybrać typ dokumentu"),
  sourceLang: z.string().min(1, "Proszę wybrać język oryginału"),
  targetLang: z.string().min(1, "Proszę wybrać język tłumaczenia"),
  description: z.string().optional(),
  urgency: z.enum(["standard", "express"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function Request() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  async function onSubmit(values: FormValues) {
    if (fileError) {
      setSubmitError("Napraw błędy plików przed wysłaniem.");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("documentType", values.documentType);
    formData.append("sourceLang", values.sourceLang);
    formData.append("targetLang", values.targetLang);
    formData.append("urgency", values.urgency);
    formData.append("description", values.description ?? "");

    selectedFiles.forEach((file) => formData.append("files", file));

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/translation-request", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Błąd wysyłania formularza.");
      }

      setIsSubmitted(true);
      setSelectedFiles([]);
      setFileError(null);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Błąd wysyłania formularza.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const validateFiles = (files: FileList | null) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    const maxTotalBytes = 10 * 1024 * 1024;
    if (!files?.length) {
      setSelectedFiles([]);
      setFileError(null);
      return;
    }

    const pickedFiles = Array.from(files);
    const invalidType = pickedFiles.find((file) => !allowedTypes.includes(file.type));
    if (invalidType) {
      setSelectedFiles([]);
      setFileError("Tylko pliki PDF, JPG lub PNG są obsługiwane.");
      return;
    }

    const totalSize = pickedFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > maxTotalBytes) {
      setSelectedFiles([]);
      setFileError("Łączny rozmiar wybranych plików nie może przekraczać 10 MB.");
      return;
    }

    setSelectedFiles(pickedFiles);
    setFileError(null);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    validateFiles(event.target.files);
    event.target.value = "";
  };

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
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Otrzymano zamówienie</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dziękuję za powierzenie mi swoich dokumentów. Przeanalizuję Twoje zgłoszenie i w ciągu najbliższych 2 godzin prześlę na Twój adres e-mail ostateczną wycenę oraz termin realizacji.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="w-full"
              data-testid="button-new-request"
            >
              Prześlij kolejne zgłoszenie
            </Button>
          </motion.div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div id="top" />
      <div className="bg-card border-b border-border py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <motion.div className="max-w-3xl" {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground tracking-tight">
              Złóż zgłoszenie tłumaczenia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Podaj szczegóły swojego dokumentu poniżej. Otrzymasz dokładną, nieobowiązującą wycenę w ciągu 2 godzin.
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
                      <h3 className="text-xl font-serif font-bold text-foreground border-b border-border pb-2">Twoje informacje</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Pełne Imię i Nazwisko</FormLabel>
                              <FormControl>
                                <Input placeholder="Jan Kowalski" {...field} data-testid="input-name" />
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
                              <FormLabel className="text-foreground">Adres Email</FormLabel>
                              <FormControl>
                                <Input placeholder="jankowalski@gmail.com" type="email" {...field} data-testid="input-email" />
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
                              <FormLabel className="text-foreground">Numer Telefonu</FormLabel>
                              <FormControl>
                                <Input placeholder="+48 XXX XXX XXX" type="tel" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-6 pt-6">
                      <h3 className="text-xl font-serif font-bold text-foreground border-b border-border pb-2">Szczegóły Dokumentu</h3>
                      
                      <FormField
                        control={form.control}
                        name="documentType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Typ Dokumentu</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-doc-type">
                                  <SelectValue placeholder="Wybierz typ dokumentu" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="birth_cert">Akt urodzenia / Certyfikat małżeństwa</SelectItem>
                                <SelectItem value="diploma">Dyplom / Transkrypcja akademicka</SelectItem>
                                <SelectItem value="contract">Umowa prawna / Umowa</SelectItem>
                                <SelectItem value="court">Oryginał sądowy / Wyrok</SelectItem>
                                <SelectItem value="medical">Rekord medyczny</SelectItem>
                                <SelectItem value="corporate">Dokument korporacyjny</SelectItem>
                                <SelectItem value="other">Inne</SelectItem>
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
                              <FormLabel className="text-foreground">Język oryginału</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-source-lang">
                                    <SelectValue placeholder="Język oryginału" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="en">English</SelectItem>
                                  <SelectItem value="pl">Polish</SelectItem>
                                  {/* <SelectItem value="de">German</SelectItem> */}
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
                              <FormLabel className="text-foreground">Język docelowy</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-target-lang">
                                    <SelectValue placeholder="Przetłumacz na" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="en">English</SelectItem>
                                  <SelectItem value="pl">Polish</SelectItem>
                                  {/* <SelectItem value="de">German</SelectItem> */}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="border-2 border-dashed border-border bg-muted/50 p-8 text-center rounded-sm">
                        <UploadCloud className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                        <h4 className="text-foreground font-medium mb-1">Prześlij dokumenty</h4>
                        <p className="text-sm text-muted-foreground mb-4">PDF, JPG, lub PNG do 10MB</p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,image/jpeg,image/png"
                          multiple
                          hidden
                          onChange={handleFileChange}
                        />
                        <Button
                          variant="outline"
                          type="button"
                          size="sm"
                          className="bg-background"
                          onClick={() => fileInputRef.current?.click()}
                          data-testid="button-choose-files"
                        >
                          Wybierz pliki
                        </Button>

                        {selectedFiles.length > 0 ? (
                          <div className="mt-4 text-left">
                            <p className="text-sm font-medium text-foreground mb-2">Wybrane pliki:</p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {selectedFiles.map((file) => (
                                <li key={`${file.name}-${file.size}`} className="break-all">
                                  {file.name} · {(file.size / 1024).toFixed(0)} KB
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground mt-4">Brak wybranych plików.</p>
                        )}

                        {fileError ? (
                          <p className="text-xs text-destructive mt-3">{fileError}</p>
                        ) : null}
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Opis (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Jakieś specyficzne wymagania dla organu, który otrzymuje ten dokument?" 
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
                      <h3 className="text-xl font-serif font-bold text-foreground border-b border-border pb-2">Poziom usługi</h3>
                      
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
                                      <div className="font-bold text-foreground mb-1">Zwykły</div>
                                      <div className="text-sm text-muted-foreground">3-4 dni robocze</div>
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
                                        Ekspres <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">+50% dopłaty</span>
                                      </div>
                                      <div className="text-sm text-muted-foreground">W ciągu 24-48 godzin</div>
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
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Wysyłanie..." : "Prześlij wniosek o wycenę"}
                      </Button>
                      {submitError ? (
                        <p className="text-sm text-destructive mt-3">{submitError}</p>
                      ) : null}
                      <p className="text-xs text-muted-foreground mt-3">
                        Formularz zostanie wysłany do adresu <strong>epschroeder@op.pl</strong> z załączonymi plikami.
                      </p>
                      <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Wszystkie przesłane dokumenty są traktowane zgodnie z surową konfidentnością prawną.
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
                <h3 className="font-serif font-bold text-xl mb-4">Proces</h3>
                <ol className="space-y-6 relative border-l border-primary-foreground/30 ml-3 pl-6">
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Prześlij dokumenty</h4>
                    <p className="text-sm text-primary-foreground/80">Prześlij jasne skany lub zdjęcia swoich oryginalnych dokumentów.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Otrzymaj wycenę</h4>
                    <p className="text-sm text-primary-foreground/80">Otrzymaj jasną, ostateczną cenę i datę dostawy w ciągu 2 godzin.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Zatwierdź i zapłać</h4>
                    <p className="text-sm text-primary-foreground/80">Potwierdź wycenę i dokonaj płatności, aby rozpocząć pracę.</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-9 top-0 bg-primary w-6 h-6 rounded-full border-2 border-primary-foreground flex items-center justify-center text-xs font-bold">4</span>
                    <h4 className="font-bold text-lg leading-none mb-1">Dostawa</h4>
                    <p className="text-sm text-primary-foreground/80">Otrzymaj legalnie zatwierdzony cyfrowy PDF natychmiast, a następnie fizyczny egzemplarz pocztą.</p>
                  </li>
                </ol>
              </div>

              <div className="bg-card border border-border p-6">
                <h3 className="font-serif font-bold mb-2">Potrzebujesz natychmiastowej pomocy?</h3>
                <p className="text-sm text-muted-foreground mb-4">W przypadku ekstremalnych sytuacji (terminy sądowe, kontrola graniczna), prosimy o bezpośredni kontakt telefoniczny.</p>
                <div className="font-mono text-primary font-bold">+48 609 457 039</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
