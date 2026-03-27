import Link from "next/link";
import { Send } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#F8F5EF]">
      <div className="text-center px-6 max-w-lg">
        <div className="w-16 h-16 rounded-full bg-[#B8963E]/10 flex items-center justify-center mx-auto mb-6">
          <Send size={28} className="text-[#B8963E]" />
        </div>
        <h1 className="text-[#0D1B2A] text-3xl font-bold mb-4">Message Received</h1>
        <div className="w-16 h-1 bg-[#B8963E] mx-auto mb-6" />
        <p className="text-gray-600 leading-relaxed mb-8">
          Thank you for reaching out. A member of our team will be in touch with you shortly. All inquiries are handled with strict confidentiality.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#B8963E] text-[#0D1B2A] font-bold uppercase text-sm tracking-wider px-8 py-4 rounded hover:bg-[#d4aa55] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}
