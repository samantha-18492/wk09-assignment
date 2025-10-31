import { auth } from "@clerk/nextjs/server";
import { db } from "../utils/utilities";
import { redirect } from "next/navigation";
import { zalandoSemiExpanded } from "../layout";

export default async function UserSignUpForm({ defaultValues }) {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";

    const data = Object.fromEntries(formData);

    const previousInfo = (
      await db.query(`SELECT * FROM user_accounts WHERE clerk_id = $1`, [
        userId,
      ])
    ).rows[0];

    if (previousInfo) {
      await db.query(
        `UPDATE user_accounts SET username = $1, bio = $2 WHERE clerk_id = $3`,
        [data.username, data.bio, userId]
      );
    } else {
      await db.query(
        `INSERT INTO user_accounts (username, bio, clerk_id) VALUES ($1, $2, $3)`,
        [data.username, data.bio, userId]
      );
    }

    redirect("/users");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center rounded-md w-sm md:w-md p-5 shadow-md shadow-gray-400 mt-10"
    >
      <h2 className={`${zalandoSemiExpanded.className} mb-2`}>Your profile</h2>
      <label className="mt-4 text-md">Username:</label>
      <input
        name="username"
        placeholder="Enter your preferred username"
        defaultValue={defaultValues?.username ?? ""}
        required
        className="w-full text-sm border-2 p-2 rounded-sm mt-2"
      />
      <label className="mt-4 text-md text-left">Tell us about yourself:</label>
      <textarea
        name="bio"
        placeholder="Share a little about your background and what kind of workplaces matter most to you"
        defaultValue={defaultValues?.bio ?? ""}
        required
        className="min-h-40 w-full text-sm border-2 p-2 rounded-sm mt-2"
      />
      <button
        type="submit"
        className={`${zalandoSemiExpanded.className} bg-ww-deep-blue text-white rounded-full shadow-md shadow-gray-400 py-2 px-6 max-w-40 mt-5 hover:bg-ww-orange hover:text-black hover:font-bold items-center`}
      >
        Save
      </button>
    </form>
  );
}
