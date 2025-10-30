import Image from "next/image";

export default function CompanyDetails({ company }) {
  return (
    <div>
      <Image src={company.logo_url} alt="" height={200} width={200} />
      <h2>{company.name}</h2>
      <p>Mission: {company.mission}</p>
      <p>{company.industry}</p>
      <p>{company.location}</p>
    </div>
  );
}
