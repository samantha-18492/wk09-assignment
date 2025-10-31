import Link from "next/link";
import { zalandoSemiExpanded } from "@/app/layout";

export default function notFound() {
  return (
    <div className="mt-20 text-center">
      <h2>We couldn&apos;t find that company.</h2>
      <br />
      <p>Check back soon or browse our existing listings.</p>
      <Link
        href="/companies"
        className={`${zalandoSemiExpanded.className} bg-ww-deep-blue text-white rounded-full shadow-md shadow-gray-400 inline-block py-4 px-6 max-w-40 mt-10 hover:bg-ww-orange hover:text-black hover:font-bold`}
      >
        Browse
      </Link>
    </div>
  );
}
