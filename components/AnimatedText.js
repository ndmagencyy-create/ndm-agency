"use client"
import { motion } from 'framer-motion'

export default function AnimatedText({ text }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="text-xl md:text-2xl font-semibold text-center"
    >
      {text}
    </motion.p>
  )
}
