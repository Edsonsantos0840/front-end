import Container from "../containers/Container";
import Link from "next/link";
import Image from "next/image";
import BtnContact from "../buttons/BtnContact";

export default async function Header() {
  return (
    <Container>
      <div className="alinha4 w-full pt-10 md:pt-12 px-2 ">
      <figure className="w-full alinha4  ">
        <Link
          href={"/"}
          className=" w-[240px] h-[87px] lg:w-[270px] lg:h-[100px] object-cover bg-cover  relative"
        >
          <Image
            src={"/logo.png"}
            alt="logo marca"
            fill
            quality={100}
            priority={true}
          />
        </Link>
      </figure>
       <BtnContact/>
      </div>

    </Container>
  );
}
