import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ignition | Intelligent Car Marketplace",
  description:
    "Ignition is a cutting-edge AI-powered car marketplace designed to streamline your car buying experience. Explore top vehicles, compare features, and book test drives — all in one smart platform.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3B82F6",
          colorBackground: "#0f172a",
          colorInputBackground: "#1e293b",
          colorInputText: "#BFDBFE",
        },
        elements: {
          formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
          card: "bg-slate-900",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-blue-300",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} bg-[#0e0e10] text-white`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
