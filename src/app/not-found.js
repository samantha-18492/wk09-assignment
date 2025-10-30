import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>That page doesnt exist Im afraid</p>
      <Link href="/">Return to home</Link>
    </div>
  );
}
