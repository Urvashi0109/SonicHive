import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { DailyProducts } from "../constants";


const DailyProductsCard = ({ index, title, icon, cost, discount, mrp, rating, offer }) => {
  return (
    <>

      <div class="max-w-sm rounded-[8px] overflow-hidden shadow-lg bg-[#E8E8E8]">
        <img class="w-50 h-43" src={icon} alt="Product" />
        <div class="px-2 py-2 flex ">
          <div class="w-full rounded-[8px] overflow-hidden shadow-lg bg-white px-2 pt-3 ">
            <div class="text-black font-semibold text-xl mb-3 px-1">{title}</div>
            <div class="inline">
              <span className="text-black font-semibold text-base mr-2 px-1">$ {cost}</span>
              <span className="text-[#00cc00] text-base mr-2 px-1">{discount} % off</span>
              <span className="text-black text-xs mr-2 px-1 line-through">$ {mrp}</span>
            </div>
            <hr class="h-px mb-1 bg-gray-200 border-0 dark:bg-gray-700" />
            <div class="inline">
              <span className="text-black text-xs mr-2 px-1 mb-2">{rating} <span class="text-[#a0aec0]"> | </span> 12 reviews</span>
            </div>
            <div className="text-black text-xs mt-2 px-1 mb-2">
              {offer}
            </div>
            <div class="pt-2 pb-2">
              <button class="w-full bg-[#FFBF00] hover:dark-bg-[#FDDA0D] text-black font-bold py-2 px-1 rounded">
                Add to Cart 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



const About = () => {
  return (
    <>
      <div className={`${styles.padding} w-11/12 mx-auto relative z-0`}>
      <motion.div >
        <h2 className={styles.sectionHeadText}>Daily Deals</h2>
      </motion.div>

      <div className='h-200 w-200 mt-8 flex flex-wrap gap-4'>
        {DailyProducts.map((DailyProducts, index) => (
          <DailyProductsCard key={DailyProducts.title} index={index} {...DailyProducts} />
        ))}
      </div>
      </div>

    </>

  )
}

export default About