import { SignUpButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>A word to the wise before you apply</p>
      <SignUpButton />
      <SignInButton />
    </div>
  );
}
