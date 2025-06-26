import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="px-6 flex-grow pt-16">
        {children}
      </main>

      <footer className="w-full flex items-center justify-center py-3">
        <p>© Kamil Korżyński 2025</p>
      </footer>
    </div>
  );
}
