import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/utils/utilities";
import UserSignUpForm from "@/app/components/UserSignUpForm";

export default async function Page() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) redirectToSignIn();

  const user = (
    await db.query(
      `SELECT username, bio FROM user_accounts WHERE clerk_id = $1`,
      [userId]
    )
  ).rows[0];

  return (
    <div className="mt-15 max-w-sm md:max-w-4xl flex flex-col items-center">
      <h2>
        You’re editing your profile. Update your details below and click{" "}
        <span className="font-bold">Save</span> to make your changes live.
      </h2>
      <UserSignUpForm defaultValues={user} />
    </div>
  );
}
