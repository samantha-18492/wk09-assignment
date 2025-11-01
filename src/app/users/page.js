import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/utils/utilities.js";
import UserSignUpForm from "../components/UserSignUpForm";
import Link from "next/link";
import UserReviews from "../components/UserReviews";
import { zalandoSemiExpanded } from "../layout";

export default async function Page() {
  const { isAuthenticated, redirectToSignIn, userId } = await auth();

  if (isAuthenticated == false) {
    redirectToSignIn();
  }

  const userInfo = (
    await db.query(`SELECT * FROM user_accounts WHERE clerk_id = $1`, [userId])
  ).rows[0];

  const isNotInDB = userInfo === undefined;

  if (isNotInDB) {
    return (
      <div className="mt-20 text-center max-w-sm md:max-w-4xl flex flex-col items-center">
        <p>
          Before you start exploring, please take a moment to complete your
          profile using the form below. It helps personalise your experience and
          connect your insights to your account.
        </p>
        <UserSignUpForm />
      </div>
    );
  }

  return (
    <div className="mt-15 max-w-sm md:max-w-4xl">
      <div className="rounded-md w-sm md:w-4xl p-5 shadow-md shadow-gray-400 mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`${zalandoSemiExpanded.className} mb-2`}>
            User profile
          </h2>
          <Link
            href="/users/edit"
            className="bg-ww-light-blue text-black rounded-full shadow-md shadow-gray-400 py-2 px-4 hover:bg-ww-orange font-bold"
          >
            Edit
          </Link>
        </div>
        <p>Username:</p>
        <p className="bg-ww-grey mt-2 p-2 rounded-sm shadow-gray-300 shadow-sm mb-2 text-lg">
          {userInfo.username}
        </p>
        <p>About you:</p>
        <p className="bg-ww-grey mt-2 p-2 rounded-sm shadow-gray-300 shadow-sm text-lg">
          {userInfo.bio}
        </p>
      </div>
      <UserReviews userId={userInfo.id} />
    </div>
  );
}
