import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3a2xb1v",
        "template_04wol1n",
        form.current,
        "yzn4wijoEK6qckiru"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };
  return (
    <div className="p-6 mt-20 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl" id="contact">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 max-w-xl mx-auto"
      >
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
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Write Message Here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-2 rounded-lg w-full"
        >
          Send Message
        </button>
        {status && (
          <p className="mt-4 text-sm">
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