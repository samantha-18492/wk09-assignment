import CompanyDetails from "@/app/components/CompanyDetails";
import { db } from "@/app/utils/utilities";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const { userId } = await auth();

  const company = (
    await db.query(`SELECT * FROM companies WHERE id = $1`, [id])
  ).rows[0];

  const reviews = (
    await db.query(
      `SELECT company_reviews.*, user_accounts.username, user_accounts.clerk_id FROM company_reviews JOIN user_accounts ON user_accounts.id = company_reviews.user_id WHERE company_reviews.company_id = $1`,
      [id]
    )
  ).rows;

  async function handleSubmit(formData) {
    "use server";

    const content = formData.get("content");

    const res = await db.query(
      `SELECT id FROM user_accounts WHERE clerk_id = $1`,
      [userId]
    );
    const currentUserId = res.rows[0].id;

    await db.query(
      `INSERT INTO company_reviews (user_id, company_id, content) VALUES ($1, $2, $3)`,
      [currentUserId, id, content]
    );

    redirect(`/companies/${id}`);
  }

  return (
    <div>
      <CompanyDetails company={company} />
      <h2>What is it like to work at {company.name}?</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.username}</p>
          <p>{review.content}</p>
        </div>
      ))}
      <form action={handleSubmit}>
        <h2>Tell others about your experience with {company.name}</h2>
        <input name="content" placeholder="e.g. heres my review" required />
        <button type="submit">Submit review</button>
      </form>
    </div>
  );
}
