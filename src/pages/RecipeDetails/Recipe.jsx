import React from 'react';
import SingleRecipe from './SingleRecipe';

const Recipe = ({ recipeDetails }) => {

	const { recipes } = recipeDetails;

	return (
		<section className="max-w-7xl mx-auto mt-4 lg:mt-20 p-4">
			<header>
				<h2 className="content-title text-center">Recipes</h2>
			</header>
			<p className="content-description text-center mt-4">
				Checkout all the awesome recipes by {recipeDetails?.chef_name}!
			</p>
			
			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-8 mt-8">
				{
					recipes?.map((recipe, index) => <SingleRecipe key={index} recipe={recipe}></SingleRecipe>)
				}
			</div>
		</section>
	);
};

export default Recipe;