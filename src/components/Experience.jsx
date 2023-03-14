import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { Categories } from "../constants"

const CategoryCard = ({ index, title, icon }) => {
  return (
    <>
      <div class="relative max-w-sm rounded-[8px] overflow-hidden shadow-lg bg-[#E8E8E8] w-[210px] h-[100px] inline">
        <span className="absolute text-center top-[8px] text-black font-semibold text-base m-3 px-2 w-1/2">{title}</span>
        <img class="w-[100px] h-[100px] absolute inset-y-0 right-0" src={icon} alt="Product" />
      </div>
    </>
  )
}

const Experience = () => {
  return (
    <>
      <div className={`${styles.padding} w-11/12 mx-auto relative z-0`}>
        <motion.div >
          <h2 className={styles.sectionHeadText}>Shop by Categories</h2>
        </motion.div>

        <div className='h-200 w-200 mt-8 flex flex-wrap gap-4'>
          {Categories.map((Categories, index) => (
             <CategoryCard key={Categories.title} index={index} {...Categories} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience