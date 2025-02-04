'use client'
import Image from "next/image";
import { motion } from 'framer-motion';

// Variants for the animation
const cardVariants = {
    hidden: { opacity: 0, x: -20 }, // Start hidden and slightly to the left
    visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: index * 0.2, // Stagger delay based on index
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function ProcessCard({ title, body, image, index }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center lg:max-w-52"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={index}>
            <Image className="mb-6" src={image} alt={title} width={125} height={125} />
            <h6>{title}</h6>
            <p className="text-sm font-bold text-justify">{body}</p>
        </motion.div>
    );
}