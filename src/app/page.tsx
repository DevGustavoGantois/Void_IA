import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-x-hidden p-8 lg:p-0">
      <div className="relative">
        <Image src="/backgroundImg.svg" width={1000} height={900} alt="" className=" max-w-full hidden md:hidden lg:hidden xl:flex" />
      </div>
      <div className="flex items-center justify-center -mt-40">
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="flex items-center gap-6 mt-60 lg:mt-0">
            <h1 className="text-[40px] text-white">Void IA</h1>
            <Image src="/LogoIcon.svg" width={41} height={36} alt="" />
          </div>
          <p className="text-white/50 w-[350px] leading-7 lg:max-w-[443px] text-center">Olá! Bem vindo a nova inteligência artificial do momento, deseja Cadastrar-se ou fazer o Login?</p>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Button asChild className="w-[200px]">
              <Link href="/register" className="text-white font-semibold text-[18px]">
                Cadastre-se
              </Link>
            </Button>
            <Button asChild className="w-[200px]"> 
              <Link href="/login" className="text-white font-semibold text-[18px]">
              Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
