import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Divyanshu",
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="w-full"> {children}</main>
      </body>
    </html>
  );
}
