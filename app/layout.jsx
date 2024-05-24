import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Streamy",
  description: "A live streaming platform",
  icons: {
    icon: "/images/streamy-logo-img.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClerkProvider
          appearance={{
            layout: {
              socialButtonsVariant: "blockButton",
            },
            variables: {
              colorText: "#D0E5FA",
              colorPrimary: "#0E78F9",
              colorBackground: "#1D1836",
              colorInputBackground: "#fff",
              colorInputText: "#371B05",
            },
          }}

        >
          <ThemeProvider
            attribute="class"
            forcedTheme={"dark"}
            storageKey="gamehub-theme"
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
