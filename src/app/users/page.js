import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/utils/utilities.js";
import UserSignUpForm from "../components/UserSignUpForm";
import Link from "next/link";
import UserReviews from "../components/UserReviews";

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
      <div>
        <UserSignUpForm />
      </div>
    );
  }

  return (
    <div>
      <h2>User profile</h2>
      <p>{userInfo.username}</p>
      <p>{userInfo.bio}</p>
      <p>{userInfo.clerk_id}</p>
      <Link href="/users/edit">Edit your profile</Link>
      <UserReviews userId={userInfo.id} />
    </div>
  );
}
