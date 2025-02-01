export default function ServiceButton({ children, className }) {
    return (
        <button className={`bg-foreground text-background text-xl py-2 px-16 rounded-2xl  ${className}`}>
            Service
        </button>
    );
}