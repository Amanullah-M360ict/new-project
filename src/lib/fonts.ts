import { IBM_Plex_Mono, Manrope, Inter } from "next/font/google";
import localFont from "next/font/local";


// use a external fonts. path is : /fonts/Higher Jump.ttf

export const higherJump = localFont({
    src: "../../public/font/IBMPlexSans-Bold.ttf",
    variable: "--font-higher-jump",
});


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