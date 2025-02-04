import Button from "@/components/Button";
import ProcessCard from "@/components/cards/ProcessCard";
import ServiceCard from "@/components/cards/ServiceCard";
import ScrollText from "@/components/ScrollText";
import ServiceButton from "@/components/ServiceButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-3 h-[30vw] max-h-96">
        <div className="bg-sia_pink"></div>
        <div className="bg-sia_green"></div>
        <div className="bg-sia_blue"></div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center my-8 container">
        <div className="space-y-4 flex flex-col justify-center items-start lg:space-y-8">
          <h3 className="text-5xl text-center lg:text-left ">
            Creating strategic & <br /> iconic visual identities <br /> to help your business grow...
          </h3>
          <p className="text-lg font-medium">
            driven by a relentless pursuit of perfection and keen eye for detail. I thrive on exploring new challenges and opportunities that push the boundaries of my creativity. Beliving fervently in the transformative power of design to effectively communicate messages ans evoke emotions. I approach each project with this conviction.
          </p>
          <Button className={"place-self-center lg:place-self-start"}>Enquire</Button>
        </div>
        <Image className="hidden lg:block" src="/cloud.svg" alt="selva studio logo" width={450} height={100} />
      </section>

      <ScrollText />

      <section className="bg-sia_green">
        <div className="py-8 space-y-4">
          <h4 className="text-5xl text-center">what we do</h4>
          <p className="text-lg text-center font-medium">Our branding packaging deliver innovative strategies designed to <br /> elevate your business. Ensuring your brand captures attention <br /> and builds lasting connection with your target audience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-8 container pb-36">
          <div className="lg:col-start-1 lg:row-start-1">
            <ServiceCard title={"The Spark Package"} image={"/phone1.png"} align={"left"} body={"This package is for businesses ready to ignite their presence on the market! We’ll craft a vibrant brand identity that resonates with your audience and lights up your unique vision."} />
          </div>
          <div className="lg:col-start-2 lg:row-start-2 -mt-6 lg:mt-0">
            <ServiceCard title={"The Elevation Package"} image={"/phone2.png"} align={"right"} body={"This package is for businesses looking to elevate their brand experience! We blend stunning design with smart strategy, ensuring your brand stands out and connects meaningfully with your audience."} />
          </div>
          <div className="lg:col-start-1 lg:row-start-3 ">
            <ServiceCard title={"The Quick Launch Package"} image={"/phone3.png"} align={"left"} body={"This package is for brands ready to take off! We’ll work closely to develop a polished brand identity in just one week, setting the foundation for your brand’s success."} />
          </div>
        </div>
      </section>

      <section className="container space-y-10 my-20">
        <h4 className="text-4xl text-center">Process</h4>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-5 gap-16 ">
          <ProcessCard index={0} image="/process/DISCOVERY.svg" title={"DISCOVERY"} body={'This is where we hop on a call and meet to explore your brand’s vision, and fill out the enquiry form, and receive the pricing guide.'} />
          <ProcessCard index={1} image="/process/RESEARCH.svg" title={"RESEARCH"} body={"This is where we were i’ll dive deep into some research, Checking out you’r competitions,getting a fell for some design styles."} />
          <ProcessCard index={2} image="/process/DESIGNING.svg" title={"DESIGNING"} body={"i’ll create two moodboards ( in some cases just one if we’re already set on the style ) and i’ll send these over to you to choose from."} />
          <ProcessCard index={3} image="/process/SHOWCASE.svg" title={"SHOWCASE"} body={"I’ll prepare a comprehensive brand presentation showcasing the evolution of the designs and highlight the thought process behind each decision."} />
          <ProcessCard index={4} image="/process/FINALISE.svg" title={"FINALISE"} body={"After receiving any feedback and approve the project, make the final payment, and receive all your final files. "} />
        </div>
      </section>

      <section className="bg-sia_blue">
        <div className="container grid grid-cols-1 lg:grid-cols-2 py-32">
          <div className="relative ">
            <Image className="hidden lg:block absolute left-1/2 -translate-x-1/2" src="/selva/s.svg" alt="selva studio logo" width={375} height={100} />
          </div>
          <div className="space-y-6 lg:col-start-2">
            <h4 className="text-4xl text-center lg:text-left">About Selva Studio</h4>
            <p className="font-bold space-y-6 child:inline-block">
              <span>I’m Selva, The creative mind behind Selva Studio. My passion lies in crafting brands that not only catch the eye but also serve a purpose. i’m commited to delivering designs that elevate brands and leave a lasting impression.</span>
              <span>As a junior Brand Designer, i get to combine my passion for art and design with my love for technology. showcasing expertise in creating visually compelling designs that effectivley communicate brand identity and resonate with target audiences.About Selva Studio</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-20 gap-10 flex flex-col">
        <h4 className="text-4xl text-center">Our Projects</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-20">
          <Image className="border-[12px] border-sia_purple aspect-square rounded-3xl" src="/selva/selva-studio.svg" alt="project 1" width={250} height={250} />
          <Image className="border-[12px] border-sia_pink aspect-square rounded-3xl" src="/selva/selva-studio.svg" alt="project 1" width={250} height={250} />
          <Image className="border-[12px] border-sia_orange aspect-square rounded-3xl" src="/selva/selva-studio.svg" alt="project 1" width={250} height={250} />
        </div>
        <ServiceButton className={'place-self-center'}>Projects</ServiceButton>
      </section>
    </main>
  );
}