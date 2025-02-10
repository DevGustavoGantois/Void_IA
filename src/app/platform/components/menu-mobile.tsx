import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, MenuIcon, MessageCircle, Trash } from "lucide-react";
import Link from "next/link";

export function MenuMobile() {
    return (
        <nav>
            <Sheet>
                <SheetTrigger>
                <MenuIcon className="text-white mt-4" size={24} />
                </SheetTrigger>
                <SheetContent>
                <SheetHeader className="mt-8">
                    <SheetTitle className="text-white text-center mb-4">Lista de conversas</SheetTitle>
                </SheetHeader>
                <SheetDescription>
                <span className="flex flex-col gap-8">
                <span className="flex items-center justify-center">
                    <span className="border border-white p-2 w-full rounded-lg">
                        <p className="text-white text-center">Lista de Conversas</p>
                    </span>
                </span>
                <span className="flex flex-col gap-4 overflow-y-auto">
                    {[...Array(6)].map((_, index) => (
                        <span key={index} className="bg-[#1D1D1D] p-4 rounded-lg flex justify-between items-center">
                            <MessageCircle className="text-white/50 transition-all duration-300 hover:text-emerald-500" />
                            <p className="text-white">Pergunta</p>
                            <Trash className="text-white/50 cursor-pointer hover:text-red-500 transition-all duration-300" />
                        </span>
                    ))}
                </span>
                <span className="mt-60 flex items-center justify-center">
                    <Link href="/" className="flex items-center text-xl gap-4">
                    Sair
                    <LogOut size={20} className="text-white" />
                    </Link>
                </span>
            </span>
                </SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    )
}