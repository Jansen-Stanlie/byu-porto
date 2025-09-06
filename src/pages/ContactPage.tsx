import React, { useState } from 'react';
import Heading from '../components/atoms/Heading';
import Button from '../components/atoms/Button';
import Map from '../components/organisms/Map';

const PageHeader = () => (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ink">
        <div className="container mx-auto px-6 text-center">
            <Heading as="h1" className="text-light-100">Contact Us</Heading>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-dark-100">
                Ready to start your next project? We're excited to hear from you. Let's create something amazing together.
            </p>
        </div>
    </section>
);

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Submitting...');
        // Mock submission
        setTimeout(() => {
            setStatus('Thank you for your message! We will get back to you within 24 business hours.');
            const form = e.target as HTMLFormElement;
            form.reset();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Your Name" required className="bg-dark-300 border border-dark-200 rounded-xl p-4 focus:ring-brand focus:border-brand w-full transition" />
                <input type="email" name="email" placeholder="Your Email" required className="bg-dark-300 border border-dark-200 rounded-xl p-4 focus:ring-brand focus:border-brand w-full transition" />
            </div>
            <input type="text" name="company" placeholder="Company Name" className="bg-dark-300 border border-dark-200 rounded-xl p-4 focus:ring-brand focus:border-brand w-full transition" />
            <textarea name="message" placeholder="Tell us about your project..." rows={5} required className="bg-dark-300 border border-dark-200 rounded-xl p-4 focus:ring-brand focus:border-brand w-full transition" />
            <div className="text-center">
                <Button type="submit" variant="primary">Send Message</Button>
            </div>
            {status && <p className="text-center mt-4 text-brand">{status}</p>}
        </form>
    )
};

const ContactDetails = () => (
    <div className="space-y-8">
        <div>
            <Heading as="h3" className="text-light-100">Get in Touch</Heading>
            <p className="mt-2 text-dark-100">Prefer a direct line? We're available via phone, WhatsApp, or email during business hours.</p>
        </div>
         <div>
            <h4 className="font-semibold text-brand">Email Us</h4>
            <a href="mailto:hello@byudigital.com" className="text-light-200 hover:text-brand transition">hello@byudigital.com</a>
        </div>
        <div>
            <h4 className="font-semibold text-brand">Call or WhatsApp</h4>
            <a href="https://wa.me/6285746363241" target="_blank" rel="noopener noreferrer" className="text-light-200 hover:text-brand transition">+62 857-4636-3241 (David Bayu)</a>
        </div>
        <div>
            <h4 className="font-semibold text-brand">Our Office</h4>
            <address className="not-italic text-light-200">
                Pantai Kelapa Tuban, Jl. Gresik No.Km.1, Kepoh, Panyuran, Kec. Palang, Kabupaten Tuban, Jawa Timur 62391
            </address>
        </div>
    </div>
);

const MapSection = () => {
    const address = "Pantai Kelapa Tuban, Jl. Gresik No.Km.1, Kepoh, Panyuran, Kec. Palang, Kabupaten Tuban, Jawa Timur 62391";
    return (
        <section className="pb-20 md:pb-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <Heading as="h2" className="text-light-100">Find Us Here</Heading>
                </div>
                <div className="mt-12">
                    <Map address={address} />
                </div>
            </div>
        </section>
    );
};


const ContactPage = () => {
    return (
        <>
            <PageHeader />
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        <div className="lg:col-span-2">
                           <ContactForm />
                        </div>
                        <div>
                           <ContactDetails />
                        </div>
                    </div>
                </div>
            </section>
            <MapSection />
        </>
    );
};

export default ContactPage;