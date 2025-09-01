import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const Hero05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Dapatkan Berita Terbaru dan Promo Kos
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Jelajahi koleksi berita dan promo terbaru tentang kos, siap dibaca dan diakses. 
            Sederhanakan pencarian kos Anda dengan informasi terkini dan penawaran menarik.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Mulai Membaca <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Lihat Demo
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none hidden lg:block">
          <img src="/city.jpg" className=" object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero05;
