"use client";

import { useState } from "react";
import type { JSX } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const info: ContactInfo[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 346 442 5302",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "helloalpacaa@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "391 17th St NW, Atlanta, 30363",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully!", result.text);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Email failed to send:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.error("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.error("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          Message sent successfully! 🎉
        </motion.div>
      )}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Please send me a message and choose the service you want.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Firstname"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Lastname"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="mobile-development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="backend-service">
                      Backend Service
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button size="default" variant="outline" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item: ContactInfo, index: number) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
