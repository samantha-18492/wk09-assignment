import { db } from "../utils/utilities";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { redirect } from "next/navigation";

export default async function UserReviews({ userId }) {
  const reviews = (
    await db.query(
      `SELECT company_reviews.id AS review_id, company_reviews.content, companies.name, companies.id AS company_id FROM company_reviews JOIN companies ON companies.id = company_reviews.company_id WHERE company_reviews.user_id = $1`,
      [userId]
    )
  ).rows;

  if (reviews.length === 0) {
    return (
      <div>
        <p>It doesnt looks like youve submitted any reviews yet.</p>
        <Link href="/companies">Browse the list of companies</Link>
      </div>
    );
  }

  async function handleDelete(reviewId) {
    "use server";
    await db.query(`DELETE FROM company_reviews WHERE id = $1`, [reviewId]);

    redirect(`/users`);
  }

  return (
    <div>
      <h2>Reviews youve submitted</h2>
      {reviews.map((review) => (
        <div key={review.review_id}>
          <p>{review.name}</p>
          <p>{review.content}</p>
          <DeleteButton
            reviewId={review.review_id}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
}
