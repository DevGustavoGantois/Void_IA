import { Input } from "@/components/ui/input";
import { Sidebar } from "./components/sidebar";
import Image from "next/image";
import { CircleArrowUp } from "lucide-react";

export default function Page() {
    return (
        <section className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6">
                <h1 className="text-center text-white font-medium text-2xl lg:text-4xl mb-60">Void IA</h1>
                <div className="flex items-center gap-4">
                 <Image src="/LogoIcon.svg" width={41} height={36} alt="" />
                 <p className="text-white text-xl">Olá Seja bem vindo ao Void IA</p>
                </div>
                <div className="relative w-full max-w-4xl">
            <Input
                className="w-full text-center p-3 pr-12 rounded-lg shadow-md"
                type="text"
                placeholder="Digite sua dúvida aqui..."
                id="text_gpt"
                name="text_gpt"
            />
            <CircleArrowUp
                className="absolute inset-y-0 right-3 my-auto text-gray-500 cursor-pointer hover:text-gray-700 transition"
                size={24}
            />
        </div>
            </div>
        </section>
    )
}
