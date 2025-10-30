import { auth } from "@clerk/nextjs/server";
import { db } from "../utils/utilities";
import { redirect } from "next/navigation";

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
    <form action={handleSubmit}>
      <label>Username:</label>
      <input
        name="username"
        placeholder="e.g. username"
        defaultValue={defaultValues?.username ?? ""}
        required
      />
      <label>Bio:</label>
      <input
        name="bio"
        placeholder="e.g. short bio"
        defaultValue={defaultValues?.bio ?? ""}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}
