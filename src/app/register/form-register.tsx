"use client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

export default function FormRegister() {
  const { toast } = useToast();

  const formSchema = z.object({
    username: z
      .string()
      .min(4, "O seu nome de usuário precisa ter no mínimo 4 caracteres.")
      .max(20, "O seu nome de usuário pode ter no máximo 20 caracteres."),
    name: z
      .string()
      .min(20, "O nome completo precisa ter no mínimo 20 caracteres.")
      .max(30, "O nome completo precisa ter no máximo 30 caracteres."),
    email: z.string().min(10, "O email precisa ter no mínimo 10 caracteres."),
    gender: z.string({
      required_error: "Por favor selecione um gênero.",
    }),
    activity: z.string({
      required_error: "Por favor selecione uma atividade",
    }),
    phone_number: z
      .string()
      .min(8, "O número de telefone precisa ter no mínimo 8 números."),
    password: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 caracteres.")
      .max(16, "A senha precisa pode ter no máximo 16 caracteres."),
    confirm_password: z
      .string()
      .min(8, "As senhas precisam ser iguais e ter 8 caracteres."),
  });

  const gender = [
    { id: 1, value: "Masculino" },
    { id: 2, value: "Feminino" },
    { id: 3, value: "outro" },
  ];

  const activity = [
    { id: 1, value: "Automação de processos" },
    { id: 2, value: "Chatbots e atendimento ao cliente" },
    { id: 3, value: "Análise de dados e BI" },
    { id: 4, value: "Machine Learning e IA preditiva" },
    { id: 5, value: "Visão computacional" },
    {
      id: 6,
      value: "Reconhecimento de voz e processamento de linguagem natural (NLP)",
    },
    { id: 7, value: "Apenas para estudos" },
  ];

  const router = useRouter();

  type FormDataSchema = z.infer<typeof formSchema>;

  const form = useForm<FormDataSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      gender: "",
      activity: "",
      phone_number: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleAction = (data: FormDataSchema) => {
    if (data.password === data.confirm_password) {
      setTimeout(() => {
        toast({
          title: "Sucesso",
          description: `Parabéns ${data.name} você foi cadastrado com o nome de usuário -> ${data.username}!`,
        });

        router.push("/login");
      }, 2000);
    } else {
      setTimeout(() => {
        toast({
          title: "Erro",
          description: `${data.name} as senhas precisam ser iguais! Por favor, tente novamente...`,
        });

        router.refresh();
      }, 2000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleAction)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 text-white/50 p-4 lg:p-8">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Digite o seu nome completo..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Digite o seu nome de usuário..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    id="email"
                    placeholder="JhonDoe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col items-start gap-2">
                <FormLabel>Gênero</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione um gênero" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {gender.map((item) => (
                      <SelectItem key={item.id} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="activity"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col items-start gap-2">
                <FormLabel>Qual o motivo do uso atualmente?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {activity.map((item) => (
                      <SelectItem key={item.id} value={item.value}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone_number"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    id="phone_number"
                    placeholder="+XX (XX) XXXXX-XXXX"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirm_password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme sua senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    id="confirm_password"
                    placeholder="Confirme sua senha..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button className="w-full text-white lg:w-[90%]" variant="default" type="submit">
            Cadastrar-se
          </Button>
        </div>
      </form>
    </Form>
  );
}
