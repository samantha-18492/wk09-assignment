import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { zalandoSemiExpanded } from "../layout";

export default function Header() {
  return (
    <header className="w-full">
      <nav
        className={`${zalandoSemiExpanded.className} w-full flex justify-center items-center p-10 flex-wrap bg-ww-grey`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center">
          <div className="flex-1 flex items-center justify-center gap-4 md:gap-10 text-2xl md:text-5xl flex-wrap">
            <Link href="/" className="">
              <span className="text-ww-orange">Work</span>
              <span className="text-ww-deep-blue">Wise</span>
            </Link>
            <SignedIn>
              <Link href="/companies" className="text-xl">
                Companies
              </Link>
            </SignedIn>
            <Link href="/about-us" className="text-xl">
              About
            </Link>
          </div>
          <div className="flex-none flex items-center gap-3 md:text-lg p-2 px-4 rounded-full bg-ww-light-blue">
            <SignedIn>
              <Link href="/users">Profile</Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
}
