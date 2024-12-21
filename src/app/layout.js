import { SidebarProvider } from "@/components/ui/sidebar";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ContextWrapper from "@/_context/ContextWrapper";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <ContextWrapper>
          <SidebarProvider>{children}</SidebarProvider>
        </ContextWrapper>
      </body>
    </html>
  );
}
