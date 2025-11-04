import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does FlowSync connect to my tools?",
    answer: "FlowSync uses secure OAuth connections to integrate with your favorite tools. Simply click 'Connect' for each app, authorize FlowSync, and you're ready to go. We never store your passwords and you can revoke access anytime."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption, are SOC 2 Type II certified, and comply with GDPR and CCPA. Your data is encrypted both in transit and at rest. We never sell or share your information with third parties."
  },
  {
    question: "Can I try FlowSync before committing?",
    answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start. You can explore all features and cancel anytime during the trial with no charges."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We'll send you a notification when you're approaching your limits. For the Free plan, syncs will pause until the next billing cycle or you can upgrade. Pro and Enterprise plans have generous limits that accommodate most teams."
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer: "Yes, you have complete flexibility. Upgrade, downgrade, or cancel your subscription at any time from your account settings. If you cancel, you'll retain access until the end of your billing period with no additional charges."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <i
                  className={`fas fa-chevron-down text-primary-600 transition-transform duration-300 text-sm sm:text-base flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                ></i>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 pt-2 bg-gray-50">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-12 text-center p-6 sm:p-7 md:p-8 bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg md:rounded-xl">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5">
            Our team is here to help. Reach out anytime.
          </p>
          <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
            Contact Support
            <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
