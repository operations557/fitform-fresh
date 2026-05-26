import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | FitForm',
  description: 'FitForm Privacy Policy - Learn how we protect your personal information in compliance with POPIA.',
  keywords: 'privacy policy, data protection, POPIA, personal information',
  openGraph: {
    title: 'Privacy Policy | FitForm',
    description: 'FitForm Privacy Policy - Learn how we protect your personal information in compliance with POPIA.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-black to-brand-black/80 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h1 className="font-display text-4xl md:text-5xl text-brand-gold tracking-wider mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-grey text-sm">Last Updated: May 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="space-y-8 text-brand-white/80 leading-relaxed">
          <section>
            <p className="mb-4">
              Fitform (Pty) Ltd ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us when you:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Place an order via WhatsApp or our website.</li>
              <li>Contact us for support or inquiries.</li>
              <li>Sign up for our newsletter or marketing communications.</li>
            </ul>
            <p>This information may include your name, contact details (phone number, email address), delivery address, and payment information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and fulfill your orders.</li>
              <li>Communicate with you regarding your orders or inquiries.</li>
              <li>Send you marketing communications (if you have opted in).</li>
              <li>Improve our products and services.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">3. WhatsApp Communication</h2>
            <p>
              By contacting us via WhatsApp, you acknowledge that WhatsApp is a third-party platform with its own privacy policy. We use WhatsApp to facilitate quick ordering and support. Please avoid sharing sensitive personal information via WhatsApp that is not required for your order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Third-party service providers (e.g., couriers) to fulfill your orders.</li>
              <li>Regulatory authorities if required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">6. Your Rights</h2>
            <p className="mb-4">Under POPIA, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request the correction or deletion of your personal information.</li>
              <li>Object to the processing of your personal information for marketing purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">7. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <div className="bg-brand-black/50 border border-brand-border rounded p-4 space-y-2">
              <p><strong>Email:</strong> ops@fit-form.co.za</p>
              <p><strong>WhatsApp:</strong> +27 77 356 1532</p>
              <p><strong>Company:</strong> Fitform (Pty) Ltd</p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-brand-border">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <Link href="/" className="text-brand-gold hover:text-brand-gold/80 transition">
              ← Back to Home
            </Link>
            <Link href="/terms" className="text-brand-gold hover:text-brand-gold/80 transition">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
