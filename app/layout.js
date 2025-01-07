import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Geotok",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/geotok/logo.png" type="image/png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/public/geotok/1024_1024 icon.jpg" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Geotok" />
        <meta property="og:image" content="/geotok/1024_1024 icon.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Geotok" />
        <meta name="twitter:image" content="/geotok/1024_1024 icon.jpg" />

        {/* Microsoft Application Icon */}
        <meta name="msapplication-TileImage" content="/geotok/1024_1024 icon.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
