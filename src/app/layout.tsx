import "./globals.css";

export const metadata = {
  title: "PadelWeb",
  description: "Nari17 TFG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav className="bg-black w-full h-full"></nav>
        {children}
      </body>
    </html>
  );
}
