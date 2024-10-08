import "./globals.css";
import { primaryFont } from "./_fonts/primary";
import Navbar from "@/components/navbar/navbar";
import { ReactLenis } from "@/lib/lenis";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} font-primary`}>
        <ReactLenis root options={{ lerp: 0.085 }}>
          <Navbar />
          {children}
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
