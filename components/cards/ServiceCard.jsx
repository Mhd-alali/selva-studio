'use client'
import Image from "next/image";
import ServiceButton from "../ServiceButton";
import { cn } from "@/utils/cn";
import { motion } from 'framer-motion';

export default function ServiceCard({ title, body, image, align }) {
    return (
        <motion.div
            className={cn("bg-background relative shadow-xl flex flex-col items-center gap-2 rounded-3xl p-10 max-w-96 place-self-center", align == 'left' ? "lg:place-self-end" : "lg:place-self-start")}
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
            whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
            viewport={{ once: false }} // Only animate once
            transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
        >
            <Image className={cn("hidden lg:block absolute -top-20", align == 'left' ? "-left-64" : "-right-64")} src={image} alt={title} width={400} height={400} />
            <h4 className="text-center text-2xl font-playfair font-bold">{title}</h4>
            <p className="font-medium text-justify">{body}</p>
            <ServiceButton className={"mt-16"}>Service</ServiceButton>
        </motion.div>
    );
}