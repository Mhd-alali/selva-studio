import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container grid grid-cols-3 place-items-center">
        <div className="space-y-4">
          <Button className={'bg-sia_blue text-foreground'}>start a project</Button>
          <div className="child:bg-background child:rounded-full child:p-1 flex w-full justify-between">
            <Image src="/social/instagram.svg" alt="instagram" width={40} height={40} />
            <Image src="/social/behance.svg" alt="behance" width={40} height={40} />
            <Image src="/social/pinterest.svg" alt="pinterest" width={40} height={40} />
          </div>
        </div>
        <div className="">
          <Image src="/selva/footer.svg" alt="selva studio logo" width={200} height={50} />
        </div>
        <ul className="font-playfair text-3xl font-bold space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
    </footer>
  );
}