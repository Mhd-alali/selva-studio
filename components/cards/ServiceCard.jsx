import Image from "next/image";
import ServiceButton from "../ServiceButton";
import { cn } from "@/utils/cn";

export default function ServiceCard({ title, body, image, align }) {
    return (
        <div className={cn("bg-background relative shadow-xl flex flex-col items-center gap-2 rounded-3xl p-10 max-w-96 place-self-center", align == 'left' ? "lg:place-self-end" : "lg:place-self-start")}>
            <Image className={cn("hidden lg:block absolute -top-20", align == 'left' ? "-left-64" : "-right-64")} src={image} alt={title} width={400} height={400} />
            <h4 className="text-center text-2xl font-playfair font-bold">{title}</h4>
            <p className="font-medium text-justify">{body}</p>
            <ServiceButton className={"mt-16"}>Service</ServiceButton>
        </div>
    );
}