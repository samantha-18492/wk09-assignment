import CompanyDetails from "@/app/components/CompanyDetails";
import { db } from "@/app/utils/utilities";

export default async function Page({ params }) {
  const { id } = await params;

  const company = (
    await db.query(`SELECT * FROM companies WHERE id = $1`, [id])
  ).rows[0];

  return (
    <div>
      <CompanyDetails company={company} />
    </div>
  );
}
