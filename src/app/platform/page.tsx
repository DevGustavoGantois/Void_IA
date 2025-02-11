"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Sidebar } from "./components/sidebar";
import Image from "next/image";
import { CircleArrowUp } from "lucide-react";
import { getOpenIaAPI } from "@/api/actions-openIA";

export default function Page() {
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getOpenIaAPI("Explique o que é Void IA");
                console.log(response)
            } catch (error) {
                console.log("Erro ao buscar a resposta da API:", error)
            }
        };

        fetchData();
    }, [])

    const [questions, setQuestions] = useState([
        { id: "1", text: "O que é Void IA?" },
        { id: "2", text: "Como funciona o aprendizado de máquina?" },
        { id: "3", text: "Qual é a diferença entre IA e ML?" },
    ]);
    
    const [inputValue, setInputValue] = useState<string>("");

    const addQuestion = async (questionText: string) => {
        const newQuestion = { id: String(Date.now()), text: questionText };
        await getOpenIaAPI(questionText);
        setQuestions((prev) => [...prev, newQuestion]);
        setInputValue(""); //Limpar o input.
    };

    const removeQuestion = (id: string) => {
        setQuestions((prev) => prev.filter((question) => question.id !== id));
    };

    return (
        <section className="flex h-screen">
            <Sidebar questions={questions} removeQuestion={removeQuestion} />
            <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6">
                <h1 className="text-center text-white font-medium text-2xl lg:text-4xl mb-60">Void IA</h1>
                <div className="flex items-center gap-4">
                    <Image src="/LogoIcon.svg" width={41} height={36} alt="" />
                    <p className="text-white text-center text-xl">Olá, seja bem-vindo ao Void IA</p>
                </div>
                <div className="relative w-full max-w-4xl">
                    <Input
                        className="w-full text-center p-3 pr-12 rounded-lg shadow-md"
                        type="text"
                        placeholder="Digite sua dúvida aqui..."
                        id="text_gpt"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        name="text_gpt"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addQuestion(e.currentTarget.value);
                                e.currentTarget.value = ""; 
                            }
                        }}
                    />
                    <CircleArrowUp
                        onClick={() => {addQuestion(inputValue)}}
                        className="absolute inset-y-0 right-3 my-auto text-gray-500 cursor-pointer hover:text-gray-700 transition"
                        size={24}
                    />
                </div>
            </div>
        </section>
    );
}
