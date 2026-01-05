import { Courier_Prime, PT_Serif } from 'next/font/google';
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ['400', '700'],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata = {
  title: "UBC Climbing Club",
  description: "University of British Columbia Climbing Club - Join us for climbing events, meet the team, and send hard!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} ${ptSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
