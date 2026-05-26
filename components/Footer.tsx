import Link from 'next/link';
import { WHATSAPP_NUMBER, EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl text-brand-gold tracking-wider">FITFORM</div>
          <p className="mt-3 text-sm text-brand-white/60 max-w-xs">Performance Nutrition. Engineered for Results.</p>
        </div>
        <div className="text-sm space-y-2">
          <div className="eyebrow mb-3">Navigate</div>
          <Link href="/" className="block text-brand-white/80 hover:text-brand-gold">Home</Link>
          <Link href="/shop" className="block text-brand-white/80 hover:text-brand-gold">Shop</Link>
          <Link href="/#how" className="block text-brand-white/80 hover:text-brand-gold">How to Order</Link>
        </div>
        <div className="text-sm space-y-2">
          <div className="eyebrow mb-3">Legal</div>
          <Link href="/privacy" className="block text-brand-white/80 hover:text-brand-gold">Privacy Policy</Link>
          <Link href="/terms" className="block text-brand-white/80 hover:text-brand-gold">Terms of Service</Link>
        </div>
        <div className="text-sm space-y-2">
          <div className="eyebrow mb-3">Contact</div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block text-brand-white/80 hover:text-brand-gold">WhatsApp: +27 77 356 1532</a>
          <a href={`mailto:${EMAIL}`} className="block text-brand-white/80 hover:text-brand-gold">{EMAIL}</a>
          <div className="text-[11px] text-brand-grey pt-3">Powered by Heferon</div>
        </div>
      </div>
      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 text-[11px] text-brand-grey font-mono flex justify-between items-center">
          <span>© 2026 Fitform (Pty) Ltd. All rights reserved.</span>
          <div className="flex gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-brand-gold transition">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
