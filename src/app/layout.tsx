import type { Metadata } from "next";
import "./globals.css";
import "./tailwind.css";
import { Outfit, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";
import { higherJump } from "@/lib/fonts";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://m360ict-ten.vercel.app"),
  title: "M360 ICT Ltd. | Architecting the Future of Digital Empowerment",
  description:
    "Leading technology partner providing innovative software solutions, digital transformation, and global travel tech architectures. Building the future of digital empowerment.",
  openGraph: {
    type: "website",
    url: "https://m360ict-ten.vercel.app",
    title: "M360 ICT Ltd. | Global Technology Solutions",
    description:
      "Empowering businesses through cutting-edge software development, digital innovation, and strategic technology partnerships.",
    images: "/images/og-preview.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "M360 ICT Ltd. | Digital Innovation Leader",
    description:
      "Architecting the future of digital empowerment with innovative software solutions and global tech expertise.",
    images: "/images/og-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} `}>
      <body>
        <SmoothScrollProvider>
          <div className="Layout">
            <Nav />
            <div className="Main">{children}</div>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
