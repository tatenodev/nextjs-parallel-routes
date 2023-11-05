import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Conductor",
  description: "Book Conductor",
};

export default async function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
