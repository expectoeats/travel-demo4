import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlyAnyTrip | Cinematic Luxury Travel",
  description: "Immersive premium travel experience"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
