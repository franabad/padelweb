import '../globals.css';
import NavBar from '@/components/client/navbar';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: 'PadelWeb',
  description: 'Nari17 TFG',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.className}>
      <body className="w-screen h-screen bg-[url('../../public/assets/fondo.jpg')] bg-cover bg-no-repeat bg-center py-4">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
