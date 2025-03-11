"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

