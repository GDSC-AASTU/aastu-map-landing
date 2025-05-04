import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" }
  ]
};

export const metadata: Metadata = {
  title: "AASTU Map - Your Intelligent Campus Navigator",
  description: "AASTU Map is a sophisticated mobile application developed by the Google Developers Group on Campus AASTU. Navigate the Addis Ababa Science and Technology University campus with ease, find buildings, classrooms, and important locations.",
  generator: "Next.js",
  applicationName: "AASTU Map",
  referrer: "origin-when-cross-origin",
  keywords: ["AASTU", "Addis Ababa Science and Technology University", "campus map", "navigation", "university app", "student app", "campus guide"],
  authors: [{ name: "Google Developers Group on Campus AASTU" }],
  creator: "Google Developers Group on Campus AASTU",
  publisher: "Google Developers Group on Campus AASTU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aastu-map-project.web.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AASTU Map - Your Intelligent Campus Navigator",
    description: "Navigate the Addis Ababa Science and Technology University campus with ease using AASTU Map. Find buildings, classrooms, and important locations instantly.",
    url: "https://aastu-map.vercel.app",
    siteName: "AASTU Map",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "AASTU Map Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AASTU Map - Your Intelligent Campus Navigator",
    description: "Navigate the Addis Ababa Science and Technology University campus with ease using AASTU Map.",
    images: ["/preview.png"],
    creator: "@aastu_gdg",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${urbanist.variable} font-urbanist antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
