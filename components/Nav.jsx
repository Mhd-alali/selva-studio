import Image from "next/image";
import Button from "./Button";

export default function Nav({ children }) {
    return (
        <nav className="font-playfair font-bold grid grid-cols-3 place-items-center w-4/5 container text-xl my-8">
            <ul className="flex gap-16">
                <li className="hidden lg:block">Home</li>
                <li className="hidden lg:block">About</li>
            </ul>
            <div className="" style={{ fontFamily: "cursive", fontSize: "2rem" }}>
                <Image src="/selva/selva-studio.svg" alt="selva studio logo" width={150} height={100} />
            </div>
            <ul className="flex gap-16">
                <li className="hidden lg:block">Services</li>
                <li className="hidden lg:block">Projects</li>
                <li className="hidden lg:block"><Button>Enquire</Button></li>
            </ul>
        </nav>
    );

}