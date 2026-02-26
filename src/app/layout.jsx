
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        {children}
        <Footer />
        {/* Bootstrap JS */}
       <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}