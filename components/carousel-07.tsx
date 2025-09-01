import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AdSlider = () => {
  const ads = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
      title: "Summer Sale 2024",
      description: "Diskon hingga 50% untuk semua produk fashion",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      title: "Tech Revolution",
      description: "Gadget terbaru dengan teknologi canggih",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      title: "Food Festival",
      description: "Nikmati kelezatan kuliner nusantara",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ads.length]);

  const prev = () => setCurrent((current - 1 + ads.length) % ads.length);
  const next = () => setCurrent((current + 1) % ads.length);

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg p-0">
      <div className="relative aspect-[16/9] w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {ads.map((ad) => (
            <div key={ad.id} className="min-w-full h-full relative">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                <h3 className="text-2xl font-bold">{ad.title}</h3>
                <p className="text-sm opacity-90">{ad.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* tombol prev/next */}
        <Button
          size="icon"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white shadow-md"
        >
          <ChevronLeft className="h-5 w-5 text-black" />
        </Button>
        <Button
          size="icon"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white shadow-md"
        >
          <ChevronRight className="h-5 w-5 text-black" />
        </Button>
      </div>

      {/* dot indicator */}
      <div className="flex justify-center gap-2 p-4">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-primary scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </Card>
  );
};

export default AdSlider;
