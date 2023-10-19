import Providers from '../utils/provider';
import '../styles/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-screen h-screen min-h-[740px] relative">
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
