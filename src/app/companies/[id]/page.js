import CompanyDetails from "@/app/components/CompanyDetails";
import { db } from "@/app/utils/utilities";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { zalandoSemiExpanded } from "@/app/layout";

export default async function Page({ params }) {
  const { id } = await params;
  const { userId } = await auth();

  const company = (
    await db.query(`SELECT * FROM companies WHERE id = $1`, [id])
  ).rows[0];

  if (!company) {
    notFound();
  }

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
    <div className="max-w-sm md:max-w-3xl">
      <CompanyDetails company={company} />
      <div className="rounded-md p-5 shadow-md shadow-gray-400 mt-15">
        <h2 className={`${zalandoSemiExpanded.className} mb-2`}>
          What&apos;s it like to work at {company.name}?
        </h2>
        <p className="text-sm md:text-md">
          Find out what working at {company.name} is really like, from those who
          know it best. All reviews are anonymous so contributors can share
          honest insights.
        </p>
        {reviews.length === 0 ? (
          <div className="mt-5 bg-ww-grey p-2 rounded-sm shadow-gray-300 shadow-sm">
            <p className="text-sm text-center">
              This company hasn&apos;t been reviewed yet. Start the conversation
              using the form below.
            </p>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className=" mt-5 bg-ww-grey p-2 rounded-sm shadow-gray-300 shadow-sm"
            >
              <p className="italic text-sm">&quot;{review.content}&quot;</p>
            </div>
          ))
        )}
      </div>
      <form
        action={handleSubmit}
        className="rounded-md p-5 shadow-md shadow-gray-400 mt-10 flex flex-col items-center"
      >
        <h2 className={`${zalandoSemiExpanded.className} mb-2`}>
          Share your experience at {company.name}
        </h2>
        <p className="text-sm md:text-md">
          Your contribution helps future employees understand what life at{" "}
          {company.name} is really like. Feel free to also share any tips for
          future colleagues.
        </p>
        <textarea
          name="content"
          placeholder="Try to include insights about company
          culture, your day-to-day experiences, and how the company supports
          employee wellbeing. "
          required
          className="w-full min-h-70 mt-5 text-sm border-2 p-2"
        />
        <button
          type="submit"
          className={`${zalandoSemiExpanded.className} bg-ww-deep-blue text-white rounded-full shadow-md shadow-gray-400 py-2 px-6 max-w-40 mt-5 hover:bg-ww-orange hover:text-black hover:font-bold`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
