import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <nav className="w-full h-24 flex justify-center items-center px-4 gap-10">
        <Link href="/">WorkWise</Link>
        <Link href="/about-us">About</Link>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <Link href="/companies">Companies</Link>
          <Link href="/users">Account</Link>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
