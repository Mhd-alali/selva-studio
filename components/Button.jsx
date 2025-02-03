import { cn } from "@/utils/cn";

export default function Button({ children, className }) {
  return (
    <button className={cn(`bg-sia_pink font-poppins font-semibold hover:opacity-90 py-1 px-6 rounded-2xl`, className)}>
      {children}
    </button>
  );
}