import Image from "next/image";
import FormRegister from "./form-register";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <section className="mt-28 lg:mt-60 p-4">   
            <Card>
            <CardHeader className="flex items-center justify-center gap-6">
                <CardTitle className="text-white text-[32px] lg:text-[40px]">Void IA</CardTitle>
                <Image src="/LogoIcon.svg" width={41} height={36} alt="" />
            </CardHeader>
            <div>
            <FormRegister />
            </div>
            </Card>
        </section>
    )
}