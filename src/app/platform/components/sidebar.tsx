import { LogOut, MessageCircle, Trash } from "lucide-react";
import Link from "next/link";
import { MenuMobile } from "./menu-mobile";
import { useRouter } from "next/navigation";

interface Props {
    questions: {id: string, text: string}[];
    removeQuestion: (id: string) => void;
}

export function Sidebar({ questions, removeQuestion }: Props) {
    const router = useRouter();

    const goToQuestion = (id: string) => {
        router.push(`/pergunta/${id}`);
    };

    return (
        <aside>
            <div className="hidden bg-gradient-to-r from-[#03083B] p-8 w-[100%] min-w-[250px] h-screen shadow-lg md:flex flex-col">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-center">
                        <div className="border border-white p-2 w-full rounded-lg">
                            <p className="text-white text-center">Lista de Conversas</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-auto">
                        {questions.map((question: {id: string, text: string}) => (
                            <div 
                                key={question.id} 
                                className="bg-[#1D1D1D] p-4 rounded-lg flex justify-between items-center cursor-pointer"
                                onClick={() => goToQuestion(question.id)}
                            >
                                <MessageCircle className="text-white/50 transition-all duration-300 hover:text-emerald-500" />
                                <p className="text-white">{question.text}</p>
                                <Trash 
                                    onClick={(e) => { 
                                        e.stopPropagation();
                                        removeQuestion(question.id);
                                    }} 
                                    className="text-white/50 cursor-pointer hover:text-red-500 transition-all duration-300" 
                                />
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
            </div>
            <div className="flex lg:hidden">
                <MenuMobile />
            </div>
        </aside>
    );
}
