import "./globals.css";

export const metadata = {
  title: "CodeConvert - React Code Conversion Platform",
  description: "Convert and transform your React code faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center"/>//important for toast notifications to work
        {children}</body>
    </html>
  );
}

