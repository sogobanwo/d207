import { Button, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="site-wrap py-36">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-serif text-6xl font-medium md:text-[84px]">This page isn’t built yet.</h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-body">
        The page you were looking for doesn’t exist or has moved.
      </p>
      <div className="mt-10">
        <Button href="/">Back to the homepage</Button>
      </div>
    </section>
  );
}
