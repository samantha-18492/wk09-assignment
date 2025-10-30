import CompanyDetails from "@/app/components/CompanyDetails";
import { db } from "@/app/utils/utilities";

export default async function Page({ params }) {
  const { id } = await params;

  const company = (
    await db.query(`SELECT * FROM companies WHERE id = $1`, [id])
  ).rows[0];

  const reviews = (
    await db.query(
      `SELECT company_reviews.*, user_accounts.username, user_accounts.clerk_id FROM company_reviews JOIN user_accounts ON user_accounts.id = company_reviews.user_id WHERE company_reviews.company_id = $1`,
      [id]
    )
  ).rows;
  return (
    <div>
      <CompanyDetails company={company} />
      <h2>What is it like to work at {company.name}?</h2>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.username}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
}
