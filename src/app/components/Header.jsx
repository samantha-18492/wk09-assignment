import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { zalandoSemiExpanded } from "../layout";

export default function Header() {
  return (
    <header className="w-full">
      <nav
        className={`${zalandoSemiExpanded.className} w-full flex justify-center items-center p-10 flex-wrap bg-ww-grey`}
      >
        <div className="flex items-center justify-center gap-4 md:gap-10 text-2xl md:text-4xl flex-wrap">
          <Link href="/">WorkWise</Link>
          <SignedIn>
            <Link href="/companies">Companies</Link>
          </SignedIn>
          <Link href="/about-us">About</Link>
        </div>
        <div className="absolute right-4 flex items-center gap-3 text-md md:text-lg p-2 px-4 rounded-full bg-ww-light-blue">
          <SignedIn>
            <Link href="/users">Profile</Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
