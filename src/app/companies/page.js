import { db } from "../utils/utilities";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const companies = (await db.query(`SELECT * FROM companies`)).rows;

  return (
    <div className="flex flex-col justify-center">
      <h2>Companies</h2>
      <div className="flext flex-wrap gap-5">
        {companies.map((company) => (
          <Link href={`companies/${company.id}`} key={company.id}>
            <h2>{company.name}</h2>
            <Image
              src={company.logo_url}
              alt=""
              height={200}
              width={200}
              className="p-4 hover:scale-105"
            />
          </Link>
        ))}
      </div>
      <p>Logged out user cant see this info so authentication required</p>
    </div>
  );
}
