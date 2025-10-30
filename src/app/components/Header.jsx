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
      <nav className="flex w-screen max=h=min gap-10 justify-center mt-8">
        <Link href="/">WorkWise</Link>
        <Link href="/about-us">About</Link>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <Link href="/companies">Companies</Link>
          <UserButton />
        </SignedIn>
        <Link href="/users">Account</Link>
        <Link href="/companies"></Link>
      </nav>
    </header>
  );
}
