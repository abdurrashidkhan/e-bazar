"use client"; // Next.js-এ ক্লায়েন্ট সাইড রেন্ডারিং এর জন্য

const FAQPage = () => {
  // FAQ ডেটা (প্রশ্ন ও উত্তর)
  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. Please ensure the product is in its original condition.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@example.com or call us at +123-456-7890.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping. Delivery times may vary depending on your location.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* পেজ হেডার */}
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      {/* FAQ একর্ডিয়ন সেকশন */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-200">
            {/* একর্ডিয়ন ইনপুট (একবারে শুধুমাত্র একটি ওপেন রাখার জন্য) */}
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0}
            />
            {/* প্রশ্ন */}
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            {/* উত্তর */}
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* অতিরিক্ত কন্টেন্ট (যদি প্রয়োজন হয়) */}
      <div className="mt-8 text-center">
        <p className="text-lg">
          Still have questions?{" "}
          <a href="/contact" className="text-[#961929] hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQPage;
