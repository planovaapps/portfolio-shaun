import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import ClientWrapper from '@/components/ClientWrapper';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import AntiCopy from '@/components/AntiCopy';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Shaun\'s Portfolio',
    description: 'Personal portfolio of Shaun',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}>
        <AntiCopy />
        <ClientWrapper>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
                <Navbar />
                <main>{children}</main>
                <Footer />

                <CustomCursor />
                <Preloader />
                <ScrollProgressIndicator />
                <ParticleBackground />
                <StickyEmail />
            </ReactLenis>
        </ClientWrapper>
        </body>
        </html>
    );
}
