import React from "react";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <motion.a
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: id }}
      viewport={{ once: true }}
      href={href}
      className="animate_top mx-w-full relative block h-10 w-[98px]"
    >
      {/* Ikon untuk mode terang */}
      <div className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden text-4xl">
        {image} {/* Render ikon langsung */}
      </div>
      
      {/* Ikon untuk mode gelap */}
      <div className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block text-4xl">
        {imageLight} {/* Render ikon langsung */}
      </div>
    </motion.a>
  );
};

export default SingleBrand;
