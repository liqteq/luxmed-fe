import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from '@/components/UI/Header'
import Footer from "@/components/UI/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const fetchCache = 'default-no-store'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        <StoreProvider>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
