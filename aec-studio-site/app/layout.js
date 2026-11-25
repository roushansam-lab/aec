import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Shell from "./components/Shell";
import { SITE } from "./data";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: "BIM, Millwork, 3D Rendering & Shop Drawings | Brand Name", template: "%s | Brand Name" },
  description: "AEC drafting and engineering partner: BIM, millwork engineering, construction drawings, 3D rendering, shop drawings and CAD conversion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
