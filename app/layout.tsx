import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ConvexClientProvider}  from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creatify",
  description: "A collaborative online whiteboard platform for teams to ideate, design, and plan together in real-time. Create infinite canvases, add sticky notes, diagrams, and drawings, and work seamlessly with your team from anywhere. Perfect for brainstorming, project planning, and visual collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <Toaster/>
          <ModalProvider/>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
