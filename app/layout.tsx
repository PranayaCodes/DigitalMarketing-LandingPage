import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free 1:1 Digital Marketing Consultation | Pranaya",
  description:
    "Book a free 1:1 digital marketing consultation and receive a customized marketing strategy built specifically for your business.",
  openGraph: {
    title: "Stop Wasting Money on Random Marketing",
    description:
      "Get a free 1:1 digital marketing consultation and a customized marketing strategy for your business.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1600,
        height: 1600,
        alt: "Pranaya digital marketing consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation | Pranaya",
    description:
      "Receive a customized marketing strategy built specifically for your business.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
