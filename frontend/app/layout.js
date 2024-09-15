import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ClientLayout } from "@/components/ClientLayout";
import { metadata } from "./metadata";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

