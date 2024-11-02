"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const DynamicModelViewer = dynamic(
  () => import("/components/model-viewer.jsx"),
  {
    ssr: false,
  }
);

const Model = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <DynamicModelViewer
            src={"../assets/model3d/scene.gltf"}
            width="100%"
            height="100%"
          ></DynamicModelViewer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Model;
