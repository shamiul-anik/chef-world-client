/* eslint-disable react/prop-types */
import React from 'react';
import ChefDetail from '../ChefDetail/ChefDetail';

const Chefs = ({ chefDetails }) => {

	return (
		<section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
			<header>
				<h2 className="content-title text-center">Our Chefs</h2>
			</header>
			<p className="content-description text-center mt-4">
				Meet our awesome Chefs!
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8">
				{
					chefDetails.map((chefDetail) => <ChefDetail key={chefDetail.id} chefDetail={chefDetail}></ChefDetail>)
				};
			</div>
		</section>
	);
};

export default Chefs;