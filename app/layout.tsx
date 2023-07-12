import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// navbar styled with tailwind. Home on left

function Navbar() {
  return (
    <div className="flex p-2">
      <Link href="/" className="text-4xl font-bold">
        Grønn Vekst
      </Link>
    </div>
  );
}
