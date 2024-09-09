import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function Head() {
  return (
    <>
      <GoogleAnalytics measurementId="G-3PC8W1F8RH" />
      <title>Rebuilding Linear.app</title>
      <meta
        name="description"
        content="Rebuilding Linear.app's website with Next.js, Tailwind."
      />
      <meta name="robots" content="noindex" />
    </>
  );
}
