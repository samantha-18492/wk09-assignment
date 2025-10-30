import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/utils/utilities";
import UserSignUpForm from "@/app/components/UserSignUpForm";

export default async function Page() {
  const { userId, redirectToSignIn } = await auth();

  const user = (
    await db.query(
      `SELECT username, bio FROM user_accounts WHERE clerk_id = $1`,
      [userId]
    )
  ).rows[0];

  return (
    <div>
      <h2>Edit your profile</h2>
      <UserSignUpForm defaultValues={user} />
    </div>
  );
}
