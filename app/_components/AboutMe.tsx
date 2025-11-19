'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I love building clean, intuitive and meaningful products that
                    genuinely help people in their daily lives.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        {/* GREETING */}
                        <h3 className="text-4xl md:text-5xl font-anton mb-8 slide-up-and-fade">
                            I'm <span className="text-primary">Shaun</span>
                        </h3>

                        {/* PROFILE IMAGE */}
                        <div className="relative mt-8 w-full flex justify-center slide-up-and-fade group mb-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                            <img
                                src="assets/animated_profile_pic.gif"
                                alt="Shaun's Profile"
                                className="relative w-44 h-44 max-w-sm rounded-full object-cover border border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-2xl"
                            />
                        </div>

                        {/* QUICK INFO CARDS */}
                        <div className="space-y-4 slide-up-and-fade">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Education</p>
                                <p className="font-semibold text-foreground">B.Tech Computer Engineering</p>
                                <p className="text-sm text-muted-foreground">Fr. Conceicao Rodrigues College</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Location</p>
                                <p className="font-semibold text-foreground">Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT COLUMN - BIOGRAPHY */}
                    <div className="md:col-span-7 flex flex-col justify-center">
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            {/* PARAGRAPH 1 */}
                            <p className="slide-up-and-fade">
                                I'm a Computer Engineering student with a deep passion for <span className="font-semibold text-foreground">building real-world applications</span> that solve meaningful problems.
                            </p>

                            {/* PARAGRAPH 2 - HIGHLIGHT PROJECT */}
                            <p className="slide-up-and-fade">
                                One of my proudest achievements is{' '}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.shaun.quickplan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-primary hover:text-white transition-colors underline decoration-primary decoration-2 underline-offset-4"
                                >
                                    QuickPlan
                                </a>
                                — a productivity and task-planning Android app published on the Google Play Store. The app demonstrates my ability to design intuitive UX, implement complex features, and ship a polished product.
                            </p>

                            {/* PARAGRAPH 3 */}
                            <p className="slide-up-and-fade">
                                I'm improving in <span className="font-semibold text-foreground">DSA, AI/ML</span> and always strive to write clean, maintainable and meaningful code.
                            </p>

                            {/* PARAGRAPH 4 */}
                            <p className="slide-up-and-fade">
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or brainstorming ideas for the next big project. I'm always excited to collaborate, learn from others, and take on new challenges.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 slide-up-and-fade flex flex-wrap gap-4">
                            <a
                                href="#selected-projects"
                                className="px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition"
                            >
                                View My Work
                            </a>

                            <a
                                href="https://github.com/planovaapps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg border border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 transition flex items-center gap-2"
                            >
                                <Github size={18} /> GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
