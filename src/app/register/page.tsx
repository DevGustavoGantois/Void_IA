import Image from "next/image";
import FormRegister from "./form-register";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <section className="mt-28 lg:mt-60 p-4">   
            <Card className="w-full lg:w-1/2">
            <CardHeader className="flex items-center justify-center gap-6"> 
                <CardTitle className="text-white text-[32px] lg:text-[40px]">Void IA</CardTitle>
                <Image src="/LogoIcon.svg" width={41} height={36} alt="" />
            </CardHeader>
            <CardContent>
            <FormRegister />
            </CardContent>
            </Card>
        </section>
    )
}