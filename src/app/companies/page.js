import { db } from "../utils/utilities";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const companies = (await db.query(`SELECT * FROM companies`)).rows;
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (isAuthenticated == false) {
    redirectToSignIn();
  }

  return (
    <div className="flex flex-col items-center text-center mt-20 p-2">
      <h2>
        Every workplace has a story. Choose a company to see what employees are
        saying.
      </h2>
      <div className="flex flex-wrap gap-5 mt-12 max-w-sm justify-center md:max-w-3xl">
        {companies.map((company) => (
          <Link
            href={`companies/${company.id}`}
            key={company.id}
            className="w-55 mx-2 my-2 p-2 shadow-md shadow-gray-400 border-ww-deep-blue border-2 rounded-md hover:scale-105"
          >
            <Image
              src={company.logo_url}
              alt=""
              height={200}
              width={200}
              className="p-4"
            />
            <h3 className="text-lg">{company.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
