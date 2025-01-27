import localFont from "next/font/local";
import "./globals.css";

// components
import Navbar from "../components/Navbar";

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
  title: "Radio Marina Group",
  description: "Management tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-600 flex flex-col h-screen`}
      >
        <Navbar />
        <main className="snap-y snap-mandatory overflow-y-scroll grow">
          {children}
        </main>
      </body>
    </html>
  );
}
