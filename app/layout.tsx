import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

// Metadata configuration for the app
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

// Viewport configuration for the theme color based on the user’s preference
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* Head and Meta Information */}
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {/* Theme Providers (e.g., light/dark theme) */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* Layout Container */}
          <div className="relative flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

            {/* Footer */}
            <footer className="w-full py-6 bg-gray-900 text-white flex items-center justify-center shadow-lg dark:bg-gray-800 dark:text-gray-300">
              <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300">
                <span className="text-gray-400">Powered by</span>
                <p className="font-semibold text-primary dark:text-blue-400">
                  InCode
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
