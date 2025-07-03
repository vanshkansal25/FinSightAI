import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets : ["latin"]})

export const metadata = {
  title: "FinSightAI",
  description: "AI powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
        >
        {/* header */}
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
        {/* footer */}
        <footer className=" py-12 border-neutral-400 border-t-2">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p className="font-bold">Made with 💗 by Vansh Kansal</p>
            </div>
          </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
