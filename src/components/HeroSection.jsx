import React from 'react';
import myImg from '../images/hero.jpg';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20 scroll-smooth ">
			<div className="text-center flex flex-col items-center justify-between box-border ">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Houssam
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					USTHB civil engeneer student and fullstack web devloper at gomycode
					funder of toucheatdz{' '}
				</p>
				<img src={myImg}
					alt="Arfan"
					className="w-full md:w-6/12 rounded-lg object-cover mt-2 mb-5 " />
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See My Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
