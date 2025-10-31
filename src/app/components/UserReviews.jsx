import { db } from "../utils/utilities";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { redirect } from "next/navigation";
import { zalandoSemiExpanded } from "../layout";

export default async function UserReviews({ userId }) {
  const reviews = (
    await db.query(
      `SELECT company_reviews.id AS review_id, company_reviews.content, companies.name, companies.id AS company_id FROM company_reviews JOIN companies ON companies.id = company_reviews.company_id WHERE company_reviews.user_id = $1`,
      [userId]
    )
  ).rows;

  if (reviews.length === 0) {
    return (
      <div className="rounded-md w-sm md:w-md p-5 shadow-md shadow-gray-400 mt-10">
        <h2 className={`${zalandoSemiExpanded.className} mb-2`}>
          Your reviews
        </h2>
        <p className="text-lg text-center bg-ww-grey mt-2 p-2 rounded-sm shadow-gray-300 shadow-sm mb-2">
          You haven’t shared any reviews yet.
        </p>
        <p className="text-lg mt-5 text-center">
          Explore our list of companies to start adding your insights and help
          others make informed career decisions.
        </p>
        <div className="flex flex-col items-center">
          <Link
            href="/companies"
            className={`${zalandoSemiExpanded.className} inline-block bg-ww-deep-blue text-white rounded-full shadow-md shadow-gray-400 py-4 px-6 max-w-40 mt-5 hover:bg-ww-orange hover:text-black hover:font-bold items-center`}
          >
            Browse
          </Link>
        </div>
      </div>
    );
  }

  async function handleDelete(reviewId) {
    "use server";
    await db.query(`DELETE FROM company_reviews WHERE id = $1`, [reviewId]);

    redirect(`/users`);
  }

  return (
    <div className="rounded-md w-sm md:w-md p-5 shadow-md shadow-gray-400 mt-10">
      <h2 className={`${zalandoSemiExpanded.className} mb-2`}>Your reviews</h2>
      {reviews.map((review) => (
        <div
          key={review.review_id}
          className="text-lg bg-ww-grey mt-2 p-2 rounded-sm shadow-gray-300 shadow-sm mb-2"
        >
          <p className="text-sm">Posted about: {review.name}</p>
          <p className="">&quot;{review.content}&quot;</p>

          <DeleteButton
            reviewId={review.review_id}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
}
