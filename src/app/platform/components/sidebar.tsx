import { LogOut, MessageCircle, Trash } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="bg-gradient-to-r from-[#03083B] p-8 w-[20%] min-w-[250px] h-screen shadow-lg flex flex-col">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center">
                    <div className="border border-white p-2 w-full rounded-lg">
                        <p className="text-white text-center">Lista de Conversas</p>
                    </div>
                </div>

                {/* Lista de perguntas */}
                <div className="flex flex-col gap-4 overflow-y-auto">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-[#1D1D1D] p-4 rounded-lg flex justify-between items-center">
                            <MessageCircle className="text-white/50" />
                            <p className="text-white">Pergunta</p>
                            <Trash className="text-white/50 cursor-pointer hover:text-red-500 transition" />
                        </div>
                    ))}
                </div>
                <div className="mt-60 flex items-center justify-center">
                    <Link href="/" className="flex items-center text-xl gap-4">
                    Sair
                    <LogOut size={20} className="text-white" />
                    </Link>
                </div>
            </div>
        </aside>
    )
}
