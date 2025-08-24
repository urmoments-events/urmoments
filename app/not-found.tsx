import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-rose-600">404</h1>
          <h2 className="text-2xl font-semibold text-slate-900 mt-4">Page Not Found</h2>
          <p className="text-slate-600 mt-2">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-3 text-white font-medium shadow hover:from-rose-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-slate-500">
            <Link href="/services" className="hover:text-rose-600">
              View Services
            </Link>
            {" • "}
            <Link href="/gallery" className="hover:text-rose-600">
              Browse Gallery
            </Link>
            {" • "}
            <Link href="/#contact" className="hover:text-rose-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
