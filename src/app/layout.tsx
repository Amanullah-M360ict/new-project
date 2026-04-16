import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M360 ICT Ltd.",
  description:
    'We hope to create the new future where people can smile, have joyful experiences and be themselves. Create a place one can call one\'s own for everyone — by connecting people to people in the "m360ict" way.',
  openGraph: {
    type: "website",
    url: "https://m360ict.com/",
    title: "M360 ICT Ltd.",
    description:
      'We hope to create the new future where people can smile, have joyful experiences and be themselves. Create a place one can call one\'s own for everyone — by connecting people to people in the "m360ict" way.',
    images: "https://m360ict.com/images/open-graph.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "M360 ICT Ltd.",
    description:
      'We hope to create the new future where people can smile, have joyful experiences and be themselves. Create a place one can call one\'s own for everyone — by connecting people to people in the "m360ict" way.',
    images: "https://m360ict.com/images/open-graph.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
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
