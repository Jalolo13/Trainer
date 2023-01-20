import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.sass";
import "./_normalize.sass";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
    weight: ["300", "400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

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
            <body>
                <div className={"wrapper" + " " + montserrat.className}>
                    <Header />
                    <main className="main">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
