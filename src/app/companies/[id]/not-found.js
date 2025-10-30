import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <p>That company isnt in our database yet</p>
      <Link href="/companies">Return to company list</Link>
    </div>
  );
}
