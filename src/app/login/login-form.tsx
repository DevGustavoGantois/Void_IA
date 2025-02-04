    "use client";
    import { Form,FormField, FormLabel, FormControl, FormItem, FormMessage } from "@/components/ui/form";
    import { Button } from "@/components/ui/button";
    import { z } from 'zod';
    import { useForm } from "react-hook-form";
    import { useToast } from "@/hooks/use-toast";
    import { zodResolver } from "@hookform/resolvers/zod";
    import { Input } from "@/components/ui/input";
    import Link from "next/link";
    import { useRouter } from "next/navigation";

    export function LoginForm() {

        const { toast } = useToast();

        const formSchema = z.object({
            username: z.string().min(4, "O seu nome de usuário precisa ter no mínimo 4 caracteres.")
            .max(20 ,"O seu nome de usuário pode ter no máximo 20 caracteres."),
            password: z.string().min(8, "A sua senha precisa ter no mínimo 8 caracteres").
            max(20, "A sua senha pode ter no máximo 20 caracteres.")
        });
        
        type formDataSchema = z.infer<typeof formSchema>;

        const form = useForm<formDataSchema>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                username: "",
                password: "",
            }
        });

        const router = useRouter();

        const handleAction = (data: formDataSchema) => {
            if(data.password === "12345678@") {

                toast({
                    title: "Sucesso",
                    description: `Olá ${data.username}, seja bem vindo(a) novamente!`
                }) 

            setTimeout(() => {
                router.push('/platform')
            }, 2000);
            }
            else {

                toast({
                    title: "Erro",
                    description: `${data.username} a senha está incorreta, por favor. Digite a senha correta.`
                })

                setTimeout(() => {
                    router.refresh()
                }, 2000)
            }
        }

        return (
            <div className="mt-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleAction)} className=" flex flex-col gap-2 p-0 lg:p-8">
                        <FormField name="username" control={form.control} render={({field}) => (
                            <FormItem className="relative">
                                <FormLabel className="text-white/50">Nome do usuário</FormLabel>
                                <FormControl>
                                    <Input
                                    type="text"
                                    placeholder="Digite o seu nome de usuário..."
                                    id="name"
                                    {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField name="password" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel className="text-white/50">Senha</FormLabel>
                                <FormControl>
                                    <Input
                                    type="password"
                                    placeholder="Digite sua senha..."
                                    id="password"
                                    {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Link href="/register" className="flex items-center gap-2 text-sm">
                        Não tem uma conta? <strong>Cadastre-se</strong>
                        </Link>
                        <div className="flex items-center justify-center">
                        <Button variant="default" type="submit" className="w-full">
                            Entrar
                        </Button>
                        </div>
                    </form>
                </Form>
            </div>
        )
    }