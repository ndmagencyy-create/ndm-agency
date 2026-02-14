"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} className="text-2xl font-bold">
          NDM Agency
        </motion.div>
        <div className="space-x-6">
          {['Accueil','À propos','Services','Portfolio','Contact'].map((link) => (
            <Link key={link} href={link === 'Accueil' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}>
              <motion.a whileHover={{ scale: 1.1 }} className="hover:text-blue-600 transition">{link}</motion.a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
