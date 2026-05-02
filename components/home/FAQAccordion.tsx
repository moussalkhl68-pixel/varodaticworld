"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is Varodatic IPTV?", a: "Varodatic IPTV is a premium streaming service offering over 26,000 live channels, an extensive VOD library (movies & series), and comprehensive sports packages entirely over the internet." },
    { q: "What devices do you support?", a: "We support a wide range of devices including Amazon Firestick, Android TV, Smart TVs (Samsung, LG), iOS, Android smartphones, Windows PC, Mac, MAG boxes, and Enigma2 devices." },
    { q: "Can I use my subscription on multiple devices?", a: "Yes, our multi-device plans allow for up to 3 simultaneous connections so your family can watch different channels at the same time." },
    { q: "What internet speed do I need?", a: "We recommend a minimum of 20 Mbps for smooth, buffer-free 4K/HD streaming. For SD quality, 10 Mbps is sufficient." },
    { q: "Is there a free trial available?", a: "Yes, we offer a free trial with no credit card required so you can test our service quality before purchasing." },
    { q: "Do you offer refunds?", a: "We handle refunds on a case-by-case basis. If you face technical issues that we cannot resolve within 72 hours, we offer a pro-rata refund." },
    { q: "How long does activation take?", a: "Activation is virtually instant. Upon successful payment, you will receive an email with your login details and setup guides." },
    { q: "Are sports and PPV events included?", a: "Absolutely. All major sports networks and PPV events (UFC, Boxing, WWE, etc.) are included in your subscription at no extra cost." },
  ];

  return (
    <section className="py-24 relative bg-surface border-y border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Everything you need to know before starting your Varodatic IPTV free trial.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50' : 'border-white/10'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-surface2/50 hover:bg-surface2 transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="font-heading font-semibold text-lg text-white">
                  {faq.q}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-2 text-muted leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
