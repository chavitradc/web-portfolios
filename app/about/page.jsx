"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiKalilinux,
  SiBurpsuite,
  SiWireshark,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
} from "react-icons/si";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About me",
  description:
    "My name is Chavit Radchapolsitte (Dew) I am studying the 4th year in Computer Science Department at Bangkok University. Interested in Cyber ​​Security by participating in Capture the flag competitions and practicing skills in the Lab.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Chavit Radchapolsitte",
    },
    {
      fieldName: "Nickname",
      fieldValue: "Dew",
    },
    {
      fieldName: "Languages",
      fieldValue: "Thai, English",
    },
    {
      fieldName: "Age",
      fieldValue: "22",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thai",
    },

    {
      fieldName: "Email",
      fieldValue: "chavit.radc@bumail.net",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "These are all the skills I’ve picked up since I started at Bangkok University, both from my studies and hands-on labs.",
  skillList: [
    {
      icon: <SiKalilinux />,
      name: "Kali Linux",
    },
    { icon: <SiBurpsuite />, name: "Burpsuite" },
    { icon: <SiWireshark />, name: "Wireshark" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiTypescript />, name: "typescript" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <SiPython />, name: "python" },
  ],
};
const education = {
  icon: "",
  title: "My education",
  description:
    "I’ve been studying Computer Science at Bangkok University since 2021, focusing on Data Science and Cybersecurity. Since 2022, I’ve worked with tools like Linux command line, Burp Suite, and developed a web project called VR-Darts using Next.js, Prisma, and MySQL.",
  items: [
    {
      institution: "Bangkok University",
      degree: "Department of Computer Science",
      duration: "2021-Present",
    },
    {
      institution: "Kali Linux,HTB,THM,CTF ",
      degree: "Cybersecurity and Ethical Hacking",
      duration: "2022-Present",
    },
    {
      institution: "Next,TailwindCSS,Typescript",
      degree: "Web Programming",
      duration: "2022-2023",
    },
  ],
};
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* aboutme */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-blue-600">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-blue-600 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
