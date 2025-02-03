import Image from "next/image";

export default function ProcessCard({ title, body, image = "/cloud.svg" }) {
    return <div className="flex flex-col items-center justify-center lg:max-w-52">
        <Image className="mb-6" src={image} alt={title} width={125} height={125} />
        <h6>{title}</h6>
        <p className="text-sm font-bold text-justify">{body}</p>
    </div>;
}
