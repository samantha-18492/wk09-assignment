import { SignUpButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mt-30">
      <p className="text-3xl italic font-bold">
        A word to the wise before you apply
      </p>
      <div className="mt-30">
        <p>
          Choosing your next job is a big decision. WorkWise helps you make it
          with confidence.
        </p>
        <p className="mb-10">
          Join the community to unlock company insights and find your perfect
          fit.
        </p>
        <div className="flex justify-center gap-10">
          <SignUpButton className="bg-ww-deep-blue py-4 px-8 rounded-full shadow-md shadow-gray-400 text-white hover:bg-ww-orange hover:text-black" />
          <SignInButton className="bg-ww-deep-blue py-4 px-8 rounded-full shadow-md shadow-gray-400 text-white hover:bg-ww-orange hover:text-black" />
        </div>
      </div>
    </div>
  );
}
