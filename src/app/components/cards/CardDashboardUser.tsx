import Image from "next/image";
import img from "../../../../public/contruçao.jpg";

export default function CardDashboardUser() {
  return (
    <section className=" m-8 p-4 bg-fundo2 rounded-2xl shadow-xl">
      <h2>Usuários</h2>
      <article>
        <div className="flex justify-around items-center">
          <figure className="flex items-center  ">
            <div className="relative w-12 h-12 hover:scale-125 rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
            <div className="relative w-12 h-12 hover:scale-125 ml-[-20px] rounded-full">
              <Image
                src={img}
                alt="'jkfd"
                fill
                quality={100}
                className="rounded-full shadow-md"
              />
            </div>
          </figure>
          <section >
            <h2 className="flex items-center gap-2"><span>50</span> <span>Usuários</span></h2>
            <ul className="h-40 overflow-hidden">
                <li className="hover:scale-110 hover:bg-fundo" >Edson Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Iasmin Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Gabriel Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Julia Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Poly Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Valdeir Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Dilma Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Adilson Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Almir Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Cecília Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >João Santos</li>
                <li className="hover:scale-110 hover:bg-fundo" >Lindaura Santos</li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
}
