'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactForm = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.contact-animate', {
            y: 80,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
        });
    });

    return (
        <section className="pb-section pt-10" id="contact">
            <div className="container max-w-3xl mx-auto" ref={container}>

                <h2 className="text-4xl md:text-6xl font-thin mb-10 contact-animate">
                    Let&apos;s Connect
                </h2>

                <p className="text-muted-foreground mb-10 max-w-[500px] contact-animate">
                    Have a question, want to collaborate, or just want to say hi?
                    Feel free to drop a message — I’ll get back to you as soon as possible.
                </p>

                <form
                    id="contact-form"
                    action="https://formsubmit.co/planovaapps@gmail.com"
                    method="POST"
                    className="space-y-6"
                >
                {/* Prevent spam */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="contact-animate">
                        <label className="block mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="contact-animate">
                        <label className="block mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="contact-animate">
                        <label className="block mb-2 font-medium">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-background border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <Button
                        as="button"
                        type="submit"
                        form="contact-form"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Send Message
                    </Button>
                </form>

            </div>
        </section>
    );
};

export default ContactForm;
