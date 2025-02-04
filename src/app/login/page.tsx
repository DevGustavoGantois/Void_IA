import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
    return (
       <section className="mt-20 lg:mt-60">
            <div className="flex items-center justify-center">
            <Card className="w-[50%]">
                <CardHeader className="flex justify-center items-center gap-6">
                    <CardTitle className="text-white text-[32px] lg:text-[40px]">Void IA</CardTitle>
                    <Image src="/LogoIcon.svg" width={41} height={36} alt="" />
                </CardHeader>
                <CardContent className="flex flex-col">

                </CardContent>
            </Card>
            </div>
       </section>
    )
}