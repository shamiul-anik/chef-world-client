import React from 'react';
import SingleRecipe from './SingleRecipe';

const Recipe = ({ recipeDetails }) => {

	const { recipes } = recipeDetails;

	return (
		<section className="max-w-7xl mx-auto mt-4 lg:mt-20 p-4">
			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 mt-8">
				{
					recipes.map((recipe, index) => <SingleRecipe key={index} recipe={recipe}></SingleRecipe>)
				}
			</div>
		</section>
	);
};

export default Recipe;