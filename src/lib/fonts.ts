import { IBM_Plex_Mono, Manrope, Inter } from "next/font/google";

export const buttonFonts = IBM_Plex_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const ManropeFonts = Manrope({
    subsets: ["latin"],
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700"],
});