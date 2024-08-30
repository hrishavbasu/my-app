import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ClientLayout } from "@/components/ClientLayout";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>{children}</ClientLayout>
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
