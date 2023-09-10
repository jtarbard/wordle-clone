import React from 'react';
import { Shrikhand } from "next/font/google"

const shrikhand = Shrikhand({
  weight: ["400"],
  subsets: ["latin"],
})

export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full h-16 border-b-2 border-white overflow-x-scroll overflow-y-hidden">
            <div className="flex h-full items-center">
                <div className="grid-col-1 w-full">
                    <p className={shrikhand.className + " " + "text-2xl font-serif font-bold text-center"}>Wordle Clone</p>
                </div>
            </div>
        </nav>
    )
}