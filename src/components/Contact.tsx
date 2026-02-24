import { useState } from 'react';
import type React from 'react';
import { Card } from './Card';
import { Input, Textarea } from './Input';
import { Button } from './Button';
import { Send } from 'lucide-react';

const CONTACT_EMAIL = 'erikasuzuki.test@gmail.com';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-shadow-neu">
        Get In Touch
      </h2>

      <Card className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Taro Yamada"
              required
            />
            <Input
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="taro@example.com"
              required
            />
          </div>

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Project Inquiry"
            required
          />

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={6}
            required
          />

          <div className="pt-4 flex justify-center">
            <Button
              type="submit"
              className="w-full md:w-auto px-12 flex items-center justify-center gap-3"
            >
              Send Message
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
};
