import { Courier_Prime, PT_Serif, Judson, EB_Garamond } from 'next/font/google';
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

const judson = Judson({
  variable: "--font-judson",
  subsets: ["latin"],
  weight: ['400'],
})

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ['400'],
  style: ['italic'],
})

export const metadata = {
  title: "UBC Climbing Club",
  description: "University of British Columbia Climbing Club - Join us for climbing events, meet the team, and send hard!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} ${ptSerif.variable} ${judson.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
