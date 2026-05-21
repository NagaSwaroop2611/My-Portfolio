import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";

export const ContactSection = () => {
  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formMessage, setFormMessage] = useState({
    text: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setFormMessage({
      text: "",
      type: "",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormMessage({
        text: "Message sent successfully!",
        type: "success",
      });

      formRef.current.reset();

      setTimeout(() => {
        setFormMessage({
          text: "",
          type: "",
        });
      }, 4000);

    } catch (error) {
      setFormMessage({
        text: "Failed to send message.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In{" "}
          <span className="text-primary">
            Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-primary w-6 h-6" />

              <div>
                <h4 className="font-semibold text-lg">
                  Email
                </h4>

                <a
                  href="mailto:swaroopsreepuram2611@gmail.com"
                  className="text-primary hover:underline"
                >
                  swaroopsreepuram2611@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-primary w-6 h-6" />

              <div>
                <h4 className="font-semibold text-lg">
                  Phone
                </h4>

                <a
                  href="tel:+918088259272"
                  className="text-primary hover:underline"
                >
                  +91 80882 59272
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="text-primary w-6 h-6" />

              <div>
                <h4 className="font-semibold text-lg">
                  Location
                </h4>

                <p className="text-primary">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-card p-8 rounded-2xl shadow-lg w-full border border-border">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  placeholder="Your Name..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="john123@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={clsx(
                  "cosmic-button w-full flex items-center justify-center gap-2 transition-all duration-300",
                  isSubmitting &&
                  "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}

                <Send
                  size={16}
                  className={
                    isSubmitting
                      ? "animate-pulse"
                      : ""
                  }
                />
              </button>

              {/* Success/Error Message */}
              {formMessage.text && (
                <p
                  className={clsx(
                    "text-sm mt-2 font-medium",
                    formMessage.type === "success"
                      ? "text-green-500"
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