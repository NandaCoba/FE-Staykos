"use client";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


interface CardKostProps {
	imageUrl: string;
	title: string;
	price: string;
	rating: number;
	type: "Putra" | "Putri" | "Umum";
}

export const CardKost: React.FC<CardKostProps> = ({ imageUrl, title, price, rating, type }) => {
	const [liked, setLiked] = useState(false);
	return (
		<div className="flex flex-col items-center w-full max-w-[100vw] md:max-w-[700px] lg:max-w-[600px] xl:max-w-[520px]">
				<div className="relative w-full aspect-square rounded-2xl overflow-hidden group shadow-sm bg-gray-100 transition-all duration-200 hover:shadow-xl hover:scale-[1.03] cursor-pointer">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-200"
					sizes="(max-width: 600px) 100vw, 400px"
				/>
				{/* Badge type kosan */}
					<Badge className="absolute top-3 left-3 z-20 rounded-full px-3 py-1 text-xs font-semibold bg-white text-black shadow border border-gray-200" style={{boxShadow:'0 2px 8px 0 rgba(0,0,0,0.10)'}}>
						{type}
					</Badge>
				{/* Tombol like (heart) */}
				<button
					type="button"
					className="absolute top-3 right-3 cursor-pointer z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
					aria-label="Like"
					onClick={e => { e.stopPropagation(); setLiked(l => !l); }}
				>
					<Heart
						className={`w-5 h-5 group-hover:scale-110 transition-transform ${liked ? "text-rose-500" : "text-black"}`}
						fill={liked ? "#f43f5e" : "none"}
					/>
				</button>
			</div>
			{/* Info di luar card/gambar */}
			<div className="w-full flex flex-col gap-1 mt-2 px-1">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1">
						<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
						<span className="text-xs font-semibold text-gray-700">{rating.toFixed(1)}</span>
					</div>
				</div>
				<h3 className="font-semibold text-base truncate" title={title}>{title}</h3>
				<span className="text-sm font-bold text-gray-900">{price}</span>
			</div>
		</div>
	);
};
