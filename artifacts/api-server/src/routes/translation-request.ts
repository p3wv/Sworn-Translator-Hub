import { Router, type Request } from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

interface TranslationRequest extends Request {
  files?: Express.Multer.File[];
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 10,
  },
  fileFilter(_req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    cb(null, allowedTypes.includes(file.mimetype));
  },
});

const router = Router();

router.post(
  "/translation-request",
  upload.array("files"),
  async (req: TranslationRequest, res) => {
    const {
      name,
      email,
      phone,
      documentType,
      sourceLang,
      targetLang,
      description,
      urgency,
    } = req.body as Record<string, string>;

    if (!name || !email || !phone || !documentType || !sourceLang || !targetLang || !urgency) {
      return res.status(400).json({ error: "Wszystkie pola wymagane oprócz opisu są wymagane." });
    }

    const files = req.files ?? [];
    const totalBytes = files.reduce((sum, file) => sum + (file.buffer?.length ?? 0), 0);

    if (totalBytes > 10 * 1024 * 1024) {
      return res.status(400).json({ error: "Łączny rozmiar plików nie może przekraczać 10 MB." });
    }

    const smtpHost = process.env.SMTP_HOST;
    if (!smtpHost) {
      logger.error("SMTP_HOST is not configured");
      return res.status(500).json({ error: "Serwer nie jest skonfigurowany do wysyłki maili." });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.EMAIL_TO ?? "epschroeder@op.pl";
    const fromAddress = process.env.EMAIL_FROM ?? process.env.SMTP_USER ?? "no-reply@example.com";

    const textLines = [
      `Imię i nazwisko: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone}`,
      `Typ dokumentu: ${documentType}`,
      `Język oryginału: ${sourceLang}`,
      `Język docelowy: ${targetLang}`,
      `Poziom usługi: ${urgency}`,
      `Opis: ${description || "Brak"}`,
      "",
      `Liczba załączników: ${files.length}`,
      ...(files.length > 0 ? ["", "Lista załączników:", ...files.map((file) => `- ${file.originalname} (${(file.size / 1024).toFixed(0)} KB)`)] : []),
    ];

    try {
      await transporter.sendMail({
        from: fromAddress,
        to: recipient,
        replyTo: email,
        subject: `Nowe zgłoszenie tłumaczenia od ${name}`,
        text: textLines.join("\n"),
        attachments: files.map((file) => ({
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype,
        })),
      });

      logger.info({ recipient, name, email, fileCount: files.length }, "Translation request email sent");
      return res.status(200).json({ status: "ok" });
    } catch (error) {
      logger.error({ err: error }, "Failed to send translation request email");
      return res.status(500).json({ error: "Błąd serwera podczas wysyłania wiadomości." });
    }
  },
);

export default router;
