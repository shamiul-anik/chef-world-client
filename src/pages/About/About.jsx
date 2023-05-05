import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

	const checkLocation = useLocation();

	useEffect(() => {
		if (checkLocation.pathname === '/about') {
			document.title = 'Chef World | About';
		}
	}, [checkLocation]);

	return (
		<div className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4 text-slate-700 text-justify">
			<p>Welcome to Chinese <span className='font-bold highlighted-text'>Chef World</span>, your ultimate destination for exploring the rich and diverse world of Chinese cuisine!</p>
			<p className='mt-4'>Our website is dedicated to bringing you comprehensive information about Chinese chefs and their signature recipes, as well as the latest news, trends, and insights about Chinese cuisine.</p>
			<p className='mt-4'>Whether you&apos;re a professional chef looking to expand your knowledge and skills, or an enthusiastic foodie looking to discover new flavors and techniques, our website has something for everyone. We offer a wide range of resources, including chef biographies, recipe collections, cooking tips, and much more.</p>
			<p className='mt-4'>At Chef World, we are passionate about celebrating the rich cultural heritage and culinary traditions of China. We believe that food is not just about nourishment, but also a form of art and expression that reflects the unique history, values, and traditions of a society. That's why we are committed to showcasing the best of Chinese cuisine and promoting its appreciation around the world.</p>
			<p className='mt-4'>So whether you&apos;re a beginner or a seasoned pro, we invite you to explore our website and discover the wonderful world of Chinese cuisine. From savory dumplings to spicy stir-fry dishes, there's something for everyone to enjoy and savor.</p>
			<p className='mt-4'>Thank you for choosing Chef World, and happy cooking!</p>
		</div>
	);
};

export default About;