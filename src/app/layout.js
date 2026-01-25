import { Judson } from 'next/font/google';
import localFont from 'next/font/local'
import "./globals.css";

const judson = Judson({
  variable: "--font-judson",
  subsets: ["latin"],
  weight: ['400'],
})

const ppEditorialNew = localFont({
  src: "./fonts/PPEditorialNew-Italic.woff2",
  variable: "--font-pp-editorial-new",
  display: "swap",
  style: 'italic',
})

const ppNeueMontreal = localFont({
  src: "./fonts/ppneuemontreal-medium.woff2",
  variable: "--font-pp-neue-montreal",
  display: "swap",
})

export const metadata = {
  title: "UBC Climbing Club",
  description: "University of British Columbia Climbing Club - Join us for climbing events, meet the team, and send hard!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ppNeueMontreal.variable} ${judson.variable} ${ppEditorialNew.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
