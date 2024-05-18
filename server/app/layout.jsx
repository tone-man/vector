import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vector.",
  description: "Habit Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Vector.</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
