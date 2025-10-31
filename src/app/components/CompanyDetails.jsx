import Image from "next/image";
import { zalandoSemiExpanded } from "../layout";

export default function CompanyDetails({ company }) {
  return (
    <div className="mt-20 rounded-md p-5 shadow-md shadow-gray-400 flex">
      <Image
        src={company.logo_url}
        alt="company logo"
        height={200}
        width={200}
      />
      <div className="ml-4">
        <h2 className={`${zalandoSemiExpanded.className} md:text-2xl`}>
          {company.name}
        </h2>
        <p className="text-sm md:text-lg">{company.mission}</p>
        <br />
        <p className="text-sm md:text-lg">Industry: {company.industry}</p>
        <p className="text-sm md:text-lg">Location: {company.location}</p>
      </div>
    </div>
  );
}
