'use client'
import { Button } from '@/components/ui/button';

// Extend dummy data to 50 entries
export const dummyKosan = Array.from({ length: 50 }, (_, idx) => ({
  imageUrl: "/contoh.avif",
  title: `Kos ${idx + 1}`,
  price: `Rp ${(800 + idx * 10).toLocaleString()}/bulan`,
  rating: parseFloat((4.5 + (idx % 5) * 0.1).toFixed(1)),
  type: ["Putra", "Putri", "Umum"][idx % 3],
}));

import { CardKost } from '@/components/cardKost'
import FAQ02 from '@/components/faq-02/faq-02';
import Features01Page from '@/components/features-01/features-01';
import Footer01Page from '@/components/footer-01/footer-01';
import Logos01Page from '@/components/logos-01/logos-01';
import Logos03Page from '@/components/logos-03/logos-03';
import Navbar05Page from '@/components/navbar-05/navbar-05'
import Testimonial06 from '@/components/testimonial-06/testimonial-06';
import Intro from '@/layouts/home/Intro'
import { useState } from 'react';


const Page = () => {

	const [visibleCount, setVisibleCount] = useState(20)

	const handleLoadMore = () => {
		setVisibleCount((prev) => Math.min(prev + 20, dummyKosan.length));
	};

	return (
		<div>
			<Navbar05Page />

			<section className="pt-24 pb-10">
				<Intro />
			</section>
			<div className="mt-40">
				<Logos03Page />
			</div>

			<section className="w-full max-w-7xl mx-auto px-4 py-20 mt-40">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8">
					{dummyKosan.slice(0, visibleCount).map((kost, idx) => (
						<CardKost
							key={kost.title + idx}
							imageUrl={kost.imageUrl}
							title={kost.title}
							price={kost.price}
							rating={kost.rating}
							type={kost.type as "Putra" | "Putri" | "Umum"}
						/>
					))}
				</div>
				{visibleCount < dummyKosan.length && visibleCount >= 20 && (
					<div className="flex justify-center mt-8">
						<Button className=" h-16 w-40 text-sm cursor-pointer bg-white border border-black border-b-2 text-gray-700 hover:bg-white font-bold" onClick={handleLoadMore}>Lihat Lebih Banyak</Button>
					</div>
				)}
			</section>

			<section className="py-20">
				<Testimonial06 />
			</section>
			<section className="py-20">
				<Features01Page />
			</section>
			<section className="py-20">
				<Logos01Page />
			</section>
			<section className="">
				<FAQ02 />
			</section>
			<Footer01Page />
		</div>
	)
}

export default Page