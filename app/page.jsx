import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import Model from "@/components/Model";
import Link from "next/link";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Passionate about Cloud Engineer & Cloud Security 
            </span>
            <h1 className="h1">
              Hello my name is <br />{" "}
              <span className="text-blue-600">Chavit Radchapolsitte</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Intersted in Cloud Engineer , Cloud Security, Web Developer
            </p>
            {/*btn*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href={"/about"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <CgProfile className="text-xl" />
                  <span>About me</span>
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-blue-500 rounded-full flex items-center justify-center text-blue-500 text-base hover:bg-blue-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Model />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
