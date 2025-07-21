import clsx from "clsx";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: "", type: "" });

    const formData = new FormData(e.target);
    formData.append("access_key", "bbfff021-ff7d-488f-88d5-875ba9789c07");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormMessage({ text: "Message sent successfully!", type: "success" });
      e.target.reset();
    } else {
      setFormMessage({
        text: data.message || "Something went wrong. Please try again.",
        type: "error",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="text-primary w-6 h-6" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <a
                  href="mailto:swaroopsreepuram2611@gmail.com"
                  className="text-primary underline"
                >
                  swaroopsreepuram2611@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-primary w-6 h-6" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <a href="tel:+918088259272" className="text-primary underline">
                  +91 80882 59272
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary w-6 h-6" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-primary">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value="bbfff021-ff7d-488f-88d5-875ba9789c07"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john123@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={clsx(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {formMessage.text && (
                <p
                  className={clsx(
                    "text-sm mt-2",
                    formMessage.type === "success"
                      ? "text-green-700"
                      : "text-red-500"
                  )}
                >
                  {formMessage.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
