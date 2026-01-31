import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <p className="text-sm text-zinc-500 mb-2">404</p>
        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <Link
          href="/"
          className="text-accent hover:underline text-sm"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
