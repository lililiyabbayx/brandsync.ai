import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

export default function Head() {
  return (
    <ClerkProvider>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-3PC8W1F8RH`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3PC8W1F8RH');
        `}
      </Script>
      <title>Rebuilding Linear.app</title>
      <meta
        name="description"
        content="Rebuilding Linear.app's website with Next.js, Tailwind."
      />
      <meta name="robots" content="noindex" />
    </ClerkProvider>
  );
}
