"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Cloud Todo App",
    title: "Azure To-Do List Application",
    description:
      "A cloud-native To-Do List application hosted on Azure. This app enables users to manage tasks through a serverless architecture. Built using Azure Static Web Apps for frontend hosting, Azure Function App for backend API handling, and Azure Table Storage for efficient data management, it showcases scalable and secure cloud solutions for task management",

    stack: [{ name: "Azure Function App" }, { name: "Azure Table Storage" }],

    image: "/assets/pics/project/thumbnail4.png",
    live: "https://witty-island-08ea4430f.5.azurestaticapps.net/",
  },
  {
    num: "02",
    category: "VR-DARTS",
    title: "Project 2",
    description:
      "VR-DARTS is a website designed for learning and memorizing aircraft. It features lessons and quizzes that users can complete after each module to reinforce their knowledge.",

    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
    ],

    image: "/assets/pics/project/thumb1.png",
    live: "https://cosi.bu.ac.th/vr-darts",
  },
  {
    num: "03",
    category: "Hands-on Labs",
    title: "Project 3",
    description:
      "I've been doing hands-on labs on TryHackMe, Hack The Box, and other platforms to practice my skills and keep learning. It's also a great way to try out new tools for CTF competitions For example, I've done labs on Windows forensics where I practiced using tools to investigate and find suspicious information on Windows OS. Some of the tools I used include RegistryExplorer and Autopsy.",

    stack: [{ name: "HTB" }, { name: "THM" }, { name: "Secplayground" }],

    image: "/assets/pics/project/thumb3.png",
    live: "#",
  },
  {
    num: "04",
    category: "CTF Blue & Red Team",
    title: "Project 4",
    description:
      "I got to participate in both the blue team and red team in a CTF competition. During the event, we used various tools to handle different challenges. For example, we used Autopsy for digital forensics to pull data from hard drives or memory and analyze the compromised systems.",

    stack: [
      { name: "Autopsy" },
      { name: "Wireshark" },
      { name: "John the ripper" },
    ],

    image: "/assets/pics/project/thumb2.png",
    live: "#",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/*outline num*/}
              <div className="text-8xl  leading-none font-extrabold text-white text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-600 transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-blue-600" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"> </div>
              <div>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div>
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-blue-600 hover:bg-blue-600-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
