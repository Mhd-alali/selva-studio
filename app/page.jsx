import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-3 h-[30vw] max-h-96">
        <div className="bg-sia_pink"></div>
        <div className="bg-sia_green"></div>
        <div className="bg-sia_blue"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center my-8 container">
        <div className="space-y-4 flex flex-col justify-center items-start lg:space-y-8">
          <h3 className="text-5xl">
            Creating strategic & <br /> iconic visual identites <br /> to help your busines grow...
          </h3>
          <p className="text-lg">
            driven by a relentless pursuit of perfection and keen eye for detail. I thrive on exploring new challenges and opportunities that push the boundaries of my creativity. Beliving fervently in the transformative power of design to effectively communicate messages ans evoke emotions. I approach each project with this conviction.
          </p>
          <Button className={"place-self-center"}>Enquire</Button>
        </div>
        <Image className="hidden lg:block" src="/cloud.svg" alt="selva studio logo" width={450} height={100} />
      </div>
      <div className="bg-sia_purple h-24">
        {/* logos here */}
      </div>
      <div className="bg-sia_green">
        <div className="py-8 space-y-4">
          <p className="text-5xl text-center">what we do</p>
          <p className="text-lg text-center">Our branding packaging deliver innovative strategies designed to <br /> elevate your business. Ensuring your brand captures attention <br /> and builds lasting connection with your target audience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-8 container pb-36">
          <div className="lg:col-start-1 lg:row-start-1">
            <ServiceCard title={"The Spark Package"} image={"/phone1.png"} align={"left"} body={"This package is for businesses ready to ignite their presence on the market! We’ll craft a vibrant brand identity that resonates with your audience and lights up your unique vision."} />
          </div>
          <div className="lg:col-start-2 lg:row-start-2 ">
            <ServiceCard title={"The Elevation Package"} image={"/phone2.png"} align={"right"} body={"This package is for businesses looking to elevate their brand experience! We blend stunning design with smart strategy, ensuring your brand stands out and connects meaningfully with your audience."} />
          </div>
          <div className="lg:col-start-1 lg:row-start-3 ">
            <ServiceCard title={"The Quick Launch Package"} image={"/phone3.png"} align={"left"} body={"This package is for brands ready to take off! We’ll work closely to develop a polished brand identity in just one week, setting the foundation for your brand’s success."} />
          </div>
        </div>
      </div>
    </div>
  );
}