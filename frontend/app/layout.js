import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'Adventure',
    template: `%s - Adventure`
  },
  description: 'Find different people who like to travel',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Providers attribute="class" defaultTheme="system" enableSystem>
        <div>
          <Header/>
          <main>
            {children}
          </main>
        </div>
      </Providers>
      </body>
    </html>
  );
}


// "use client";

// import { Inter } from "next/font/google";
// import React, { useState, useCallback } from "react";
// import Navbar from "../components/navbar";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleDarkMode = useCallback(() => {
//     setIsDarkMode((prevMode) => !prevMode);
//   }, []);

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen((prevState) => !prevState);
//   }, []);

//   return (
//     <html
//       lang="en"
//       className={isDarkMode ? "dark" : ""}
//       suppressHydrationWarning
//     >
//       <body
//         className={`${inter.className} ${
//           isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//         }`}
//       >
//         <Navbar
//           // isDarkMode={isDarkMode}
//           // toggleDarkMode={toggleDarkMode}
//           isMenuOpen={isMenuOpen}
//           toggleMenu={toggleMenu}
//         />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }
