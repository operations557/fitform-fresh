import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | FitForm',
  description: 'FitForm Terms of Service - Read our terms and conditions for ordering premium NPB supplements.',
  keywords: 'terms of service, terms and conditions, consumer protection, CPA',
  openGraph: {
    title: 'Terms of Service | FitForm',
    description: 'FitForm Terms of Service - Read our terms and conditions for ordering premium NPB supplements.',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-black to-brand-black/80 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h1 className="font-display text-4xl md:text-5xl text-brand-gold tracking-wider mb-4">
            Terms of Service
          </h1>
          <p className="text-brand-grey text-sm">Last Updated: May 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="space-y-8 text-brand-white/80 leading-relaxed">
          <section>
            <p className="mb-4">
              Welcome to Fitform. These Terms of Service ("Terms") govern your use of our website and the purchase of our products. By accessing our site or placing an order, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">1. General Conditions</h2>
            <p>
              We reserve the right to refuse service to anyone for any reason at any time. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of our service or products without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">2. Products and Pricing</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All products are subject to availability.</li>
              <li>We reserve the right to change prices or discontinue products without notice.</li>
              <li>We make every effort to display product images and descriptions accurately, but we do not warrant that they are error-free.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">3. Orders and Payments</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Orders are primarily facilitated via WhatsApp for your convenience.</li>
              <li>By placing an order, you represent that you are of legal age to enter into a binding contract.</li>
              <li>Payments must be made via the methods specified during the checkout process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">4. Shipping and Delivery</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We ship within South Africa.</li>
              <li>Delivery times are estimates and not guaranteed.</li>
              <li>Risk of loss and title for products pass to you upon delivery to the carrier.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">5. Returns and Refunds</h2>
            <p className="mb-4">In accordance with the Consumer Protection Act (CPA) of South Africa:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>You have the right to return defective or unfit goods within a reasonable period.</li>
              <li>For hygiene and safety reasons, supplements can only be returned if the seal is intact and the packaging is undamaged, unless the product is defective.</li>
              <li>Please contact us at ops@fit-form.co.za to initiate a return.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">6. Limitation of Liability</h2>
            <p>
              Fitform (Pty) Ltd shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">7. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to update or change these Terms at any time. Your continued use of the website or services following any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-gold mb-4">9. Contact Information</h2>
            <p className="mb-4">For any questions regarding these Terms, please contact:</p>
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
            <Link href="/privacy" className="text-brand-gold hover:text-brand-gold/80 transition">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
