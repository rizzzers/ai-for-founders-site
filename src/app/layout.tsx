import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "AI for Founders - Newsletter, Podcast & Workshops",
    template: "%s | AI for Founders",
  },
  description:
    "AI for Founders is your ultimate resource for building with AI. Join 20,000+ startup founders with our Top 100 Entrepreneurship podcast, weekly newsletter, and hands-on workshops.",
  metadataBase: new URL("https://aifor-founders.com"),
  openGraph: {
    siteName: "AI for Founders",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aifor_founders",
  },
  verification: {
    google: "csPE1B5QUxsuhsI5L3aeXVbNLJV_fvxe4CiBOHXxI6Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
