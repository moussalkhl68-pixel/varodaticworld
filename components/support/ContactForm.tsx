"use client";

import CTAButton from "../shared/CTAButton";
import { MessageCircle, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-24 relative bg-surface2 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Get in Touch <span className="text-primary">24/7.</span>
            </h2>
            <p className="text-lg text-muted max-w-xl mb-10">
              For the fastest response, we recommend reaching out via WhatsApp or Telegram. Our support agents usually reply within 15 minutes.
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/447476603520" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-6 rounded-2xl flex items-center hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <div className="bg-[#25D366]/20 p-4 rounded-full mr-6 group-hover:bg-[#25D366]/40 transition-colors">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg flex items-center gap-2">
                    <span className="text-[#25D366]">WhatsApp Support</span>
                    <span className="text-[#A0A0A0] text-sm font-normal block md:inline mt-1 md:mt-0">+44 747 660 3520</span>
                  </h4>
                  <p className="text-muted text-sm mt-1">Instant replies, best for live troubleshooting.</p>
                </div>
              </a>

              <a href="#telegram" className="glass p-6 rounded-2xl flex items-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="bg-[#0088cc]/20 p-4 rounded-full mr-6 group-hover:bg-[#0088cc]/40 transition-colors">
                  <MessageCircle className="w-8 h-8 text-[#0088cc]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg">Telegram</h4>
                  <p className="text-muted text-sm">Secure and fast communication channel.</p>
                </div>
              </a>

              <a href="mailto:support@varodaticiptv.pro" className="glass p-6 rounded-2xl flex items-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="bg-primary/10 p-4 rounded-full mr-6 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg">Email Support</h4>
                  <p className="text-muted text-sm">support@varodaticiptv.pro (Reply within 24h)</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Send us a message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Name</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Email Address</label>
                  <input type="email" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Subject</label>
                <select className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea rows={5} className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="How can we help you today?"></textarea>
              </div>

              <CTAButton href="#submit" className="w-full py-4 text-lg">
                Send Message
              </CTAButton>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
