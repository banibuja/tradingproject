import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import Home from "./components/Home";

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

export const metadata = {
  title: "TradingProject",
  description: "created by banozz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Link to Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "'Outfit', sans-serif" }} // Outfit as the primary font
      >
        {children}
        <Home />
      </body>
    </html>
  );
}
