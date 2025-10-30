import Link from "next/link";
import Image from "next/image";

export default function notFound() {
  return (
    <div>
      <p>That company isnt in our database yet</p>
      <Link href="/companies">Return to company list</Link>
      <Image
        src="https://www.shutterstock.com/image-photo/grungy-out-business-sign-on-600nw-1839764254.jpg"
        alt=""
        height={404}
        width={600}
      />
    </div>
  );
}
