import Container from "../containers/Container";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  return (
    <Container>
      <section className="w-full alinha6 p-4 pt-16 ">
        <Link
          href={"/"}
          className=" w-[270px] h-[100px] object-cover bg-cover  relative"
        >
          <Image
            src={"/logo.png"}
            alt="logo marca"
            fill
            quality={100}
            priority={true}
          />
        </Link>
      </section>
    </Container>
  );
}
