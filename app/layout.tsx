import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
// import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3PC8W1F8RH"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PC8W1F8RH');
          `}
        </Script>
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
