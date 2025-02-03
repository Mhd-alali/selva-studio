import { cn } from "@/utils/cn";

export default function ServiceButton({ children, className }) {
    return (
        <button className={cn(`bg-foreground font-semibold text-background text-2xl py-2 px-16 rounded-2xl`, className)}>
            {children}
        </button>
    );
}