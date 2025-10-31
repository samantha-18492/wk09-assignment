import { SignUpButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-center mt-30">
      <p className="text-3xl italic font-bold p-4">
        A word to the wise before you apply
      </p>
      <div className="mt-30 p-4">
        <p>
          Choosing your next job is a big decision. WorkWise helps you make it
          with confidence.
        </p>
        <p className="mb-10">
          Join the community to unlock company insights and find your perfect
          fit.
        </p>
        <div className="flex justify-center gap-10">
          <SignUpButton className="bg-ww-deep-blue py-4 px-8 text-2xl rounded-full shadow-md shadow-gray-400 text-white hover:bg-ww-orange hover:text-black hover:font-bold" />
          <SignInButton className="bg-ww-deep-blue py-4 px-8 text-2xl rounded-full shadow-md shadow-gray-400 text-white hover:bg-ww-orange hover:text-black hover:font-bold" />
        </div>
      </div>
    </div>
  );
}
