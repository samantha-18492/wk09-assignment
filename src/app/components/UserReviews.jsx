import { db } from "../utils/utilities";
import Link from "next/link";

export default async function UserReviews({ userId }) {
  const reviews = (
    await db.query(`SELECT * FROM company_reviews WHERE user_id = $1`, [userId])
  ).rows;

  if (reviews.length === 0) {
    return (
      <div>
        <p>It doesnt looks like youve submitted any reviews yet.</p>
        <Link href="/companies">Browse the list of companies</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Reviews youve submitted</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Anonymous {review.id}</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}
