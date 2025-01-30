import Container from "../containers/Container";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  return (
    <Container>
      <section className="w-full alinha6 p-4 pt-16 ">
        <Link
          href={"/"}
          className=" w-[200px] h-[80px] object-cover bg-cover "
        >
          <Image
            src={"/logo.png"}
            alt="logo marca"
            width={200}
            height={80}
            quality={100}
            priority={true}
          />
        </Link>
      </section>
    </Container>
  );
}
