import Link from "next/link";
import { zalandoSemiExpanded } from "./layout";

export default function notFound() {
  return (
    <div className="mt-20 text-center">
      <h2>Oops! That page doesn&apos;t exist.</h2>
      <br />
      <p>
        Sometimes even the best career journeys hit a dead end. Return home to
        get back on track.
      </p>
      <Link
        href="/"
        className={`${zalandoSemiExpanded.className} bg-ww-deep-blue text-white rounded-full shadow-md shadow-gray-400 inline-block py-4 px-6 max-w-60 mt-10 hover:bg-ww-orange hover:text-black hover:font-bold`}
      >
        Home
      </Link>
    </div>
  );
}
