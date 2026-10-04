import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32">
      <p className="text-orange-500">404</p>
      <h1 className="display mt-3 text-6xl">Page not found.</h1>
      <p className="mt-6 text-lg text-muted">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn-orange mt-10">Back to Home</Link>
    </section>
  );
}
