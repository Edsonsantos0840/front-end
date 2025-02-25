import Container from "../containers/Container";
import Link from "next/link";
import Image from "next/image";
import BtnContact from "../buttons/BtnContact";

export default async function Header() {
  return (
    <Container>
      <div className="alinha4 w-full pt-6">
      <figure className="w-full alinha4  pt-16 ">
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
      </figure>
       <BtnContact/>
      </div>

    </Container>
  );
}
