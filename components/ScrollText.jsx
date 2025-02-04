'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollText() {
    // Create a ref for the component
    const ref = useRef(null);

    // Track scroll progress relative to the component
    const { scrollYProgress } = useScroll({
        target: ref, // Use the component as the target
        offset: ["start end", "start start"], // Animation starts when the component enters the viewport and ends when it reaches the top
    });

    // Map scroll progress to the x position of the text
    const x = useTransform(scrollYProgress, [0, 1], ['-50%', '90%'], { clamp: false, });

    return (
        <section ref={ref} className="bg-sia_purple h-16 text-background font-semibold text-xl relative overflow-hidden">
            <motion.div
                className="absolute top-1/2 min-w-max"
                style={{ x, y: '-50%' }}
            >
                logo design . brand identity . social media design . packaging design . print design
            </motion.div>
        </section>
    );
}