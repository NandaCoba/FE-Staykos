import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    category: "Untuk Pemilik Kos",
    title: "Pasang Kosan Sekarang, Gratis!",
    details:
      "Promosikan kosan Anda dengan mudah di StayKos. Dapatkan penyewa lebih cepat dengan tampilan profesional dan akses langsung ke ribuan pencari kos setiap hari. Tanpa biaya, tanpa ribet.",
    tutorialLink: "/auth/register", // langsung ke halaman daftar pemilik kos
  },
];

const Features06Page = () => {
  return (
    <div>
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Promosikan Kosan Anda Lebih Mudah
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              {/* Gambar ilustrasi placeholder */}
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 flex items-center justify-center text-muted-foreground text-lg font-medium">
                <img src="/home.jpg" className=" rounded-xl" alt="" />
              </div>

              {/* Konten */}
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details}
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={feature.tutorialLink}>
                    Daftar Sekarang <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;
