"use client";
import {Button} from "@/components/ui/button";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {    

    return (
        <main className="flex h-full flex-col
            items-center justify-center
            bg-gradient-to-r from-slate-50 to-sky-100">
          
          <div className="space-y-6">
            <h1 className="text-6xl font-semibold text-white drop-shadow-md">
              Auth whydandrian
            </h1>
            <p className="text-center text-lg text-white">
              Simple Authentication using NextJS
            </p>
          </div>

        </main>
    )
}
