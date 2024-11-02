"use client";
import React from "react";
import CertificateCard from "@/components/Certificate";
import { motion } from "framer-motion";
const images = [
  {
    title: "Basic Cybersecurity",
    imagePath: "/assets/pics/certificate/BasicCybersecurity.png",
  },
  {
    title: "Thailand Cyber Top Talent 2023",
    imagePath: "/assets/pics/certificate/CTF_rockyou.png",
  },
];
const Certificate = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row my-5 xl:my-0 justify-between xl:pt-8 xl:pb-24 ">
          <h1 className="h2">My Certificate</h1>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {images.map((card, index) => (
            <CertificateCard
              key={index}
              title={card.title}
              imagePath={card.imagePath}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
