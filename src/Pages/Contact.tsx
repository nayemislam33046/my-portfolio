import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // Form ref typing
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_3a2xb1v",       // Service ID
        "template_04wol1n",      // Template ID
        form.current,
        "yzn4wijoEK6qckiru"      // Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="p-6 mt-20 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl"
      id="contact"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 max-w-xl mx-auto"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Enter Your Name Here"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Enter Your Email Here"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Write Message Here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-2 rounded-lg w-full transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-sm text-center">
            {status.includes("successfully") ? (
              <span className="text-green-500">{status}</span>
            ) : (
              <span className="text-red-500">{status}</span>
            )}
          </p>
        )}
      </form>
    </div>
  );
}
