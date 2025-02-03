import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using Next.js's generateMetadata to have more control over meta tags
export async function generateMetadata() {
  return {
    title: "Memespin - Fair Blockchain Gaming",
    description: "Experience the thrill of Memespin! Winners share the prize pool, draws get half back, and losers get nothing. Play now!",
    // Twitter specific meta tags
    other: {
      'twitter:card': 'player',
      'twitter:site': '@winksdotfun',
      'twitter:title': 'Memespin - Fair Blockchain Gaming',
      'twitter:description': 'Experience the thrill of Memespin! Winners share the prize pool, draws get half back, and losers get nothing. Play now!',
      'twitter:player': 'https://memespin.winks.fun',
      'twitter:player:width': '360',
      'twitter:player:height': '560',
      'twitter:image': 'https://res.cloudinary.com/dvddnptpi/image/upload/v1738600087/zqhjyzunv8fq8nxt9ggk.png',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}