//meus componentes
import Container from "../containers/Container";
import BtnContact from "../buttons/BtnContact";
//componentes
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  return (
    <Container>
      <div className="alinha4 w-full pt-10 md:pt-12 lg:pt-16 px-2 ">
        <figure className="w-full alinha4  ">
          <Link
            href={"/"}
            className=" w-[180px] h-[64px] lg:w-[270px] lg:h-[100px] object-cover bg-cover  relative"
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
        <BtnContact classEdit="md:px-4 w-full md:w-[30%] lg:w-[20%]" />
      </div>
    </Container>
  );
}
