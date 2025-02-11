import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, MenuIcon, MessageCircle, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
    questions: { id: string; text: string }[];
    removeQuestion: (id: string) => void;
}

export function MenuMobile({ questions, removeQuestion }: Props) {
    const router = useRouter();

    const goToQuestion = (id: string) => {
        router.push(`/pergunta/${id}`);
    };

    return (
        <nav>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="text-white mt-4" size={24} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="mt-8 flex">
                        <SheetTitle className="text-white text-center mb-4">Lista de conversas</SheetTitle>
                    </SheetHeader>
                    <SheetDescription>
                        <span className="flex flex-col justify-center gap-8">
                            <span className="flex items-center justify-center">
                                <span className="border border-white p-2 w-full rounded-lg">
                                    <span className="text-white text-center flex items-center justify-center">Lista de Conversas</span>
                                </span>
                            </span>
                            <span className="flex flex-col gap-4 overflow-y-auto">
                                {questions.map((question) => (
                                    <span key={question.id} className="bg-[#1D1D1D] p-4 rounded-lg flex justify-between items-center">
                                        <MessageCircle
                                            onClick={() => goToQuestion(question.id)}
                                            className="text-white/50 transition-all duration-300 hover:text-emerald-500 cursor-pointer"
                                        />
                                        <span className="text-white text-sm">{question.text}</span>
                                        <Trash
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeQuestion(question.id);
                                            }}
                                            className="text-white/50 cursor-pointer hover:text-red-500 transition-all duration-300"
                                        />
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
    );
}
