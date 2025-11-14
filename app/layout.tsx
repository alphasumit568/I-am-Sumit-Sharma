import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Sumit",
  description:
    "Portfolio of Sumit Sharma - Software Developer specializing in modern web technologies",
  keywords: [
    "Sumit Sharma",
    "Sumit",
    "Sharma",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Portfolio of Sumit",
    description:
      "Portfolio of Sumit Sharma - Software Developer specializing in modern web technologies",
    type: "website",
    url: "imsumit.in",
    siteName: "Sumit Sharma",
    locale: "en_US",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Sumit Sharma - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Sumit Sharma - Full Stack Developer",
    description:
      "Portfolio of Sumit Sharma - Software Developer specializing in modern web technologies",
    card: "summary_large_image",
    site: "@sumi69966",
    creator: "@sumi69966",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Sumit Sharma - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
