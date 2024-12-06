import "./globals.css";

export const metadata = {
  title: "zentry-clone",
  description: "Redefine Gaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
