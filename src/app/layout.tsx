import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from '@/components/UI/Header'
import Footer from "@/components/UI/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Lux Med",
  description: "Where Patients From Around The World Find You, and You Find Success!",
};
export const fetchCache = 'default-no-store'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC = ({ children }:any) => {
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
export default RootLayout