"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-[10px] text-center mb-[15px]'
      >
        Techno Verse
      </motion.div>
    </div>
  )
}

export default SkillText