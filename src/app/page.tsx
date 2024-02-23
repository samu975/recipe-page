import Image from 'next/image';
import RecipeImage from '../assets/recipe.jpg';

export default function Home() {
  const separationLine = () => <div className="border-t-2 w-full"></div>;
  return (
    <main className="md:py-8 md:px-12">
      <Image src={RecipeImage} alt="" className="md:w-full" />
      <section className="mx-5">
        <h1 className="capitalize mt-6 text-3xl font-extrabold italic text-dark-characoal md:text-5xl md:mt-10">
          Simple omelette recipe
        </h1>
        <p className="my-4 text-wenge-brown ">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="div-rose bg-snow p-4 rounded-md mb-6 md:py-8 md:my-10">
          <h3 className="my-3 text-xl font-bold text-dark-raspberry md:text-3xl">
            Preparation time
          </h3>
          <ul className="list-disc mx-6 md:flex md:flex-col md:gap-4">
            <li>
              <span className="font-bold text-wenge-brown">Total:</span>{' '}
              Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold text-wenge-brown">Preparation</span> 5
              minutes
            </li>
            <li>
              <span className="font-bold text-wenge-brown">Cooking</span> 5
              minutes
            </li>
          </ul>
        </div>
        <div className="my-6 text-wenge-brown md:my-10">
          <h2 className="font-bold text-2xl md:text-brandy-red md:text-4xl">
            Ingredients
          </h2>
          <ul className="my-4 mx-6 list-disc md:flex md:flex-col md:gap-4">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        {separationLine()}
        <div className="my-6 text-wenge-brown md:my-10">
          <h2 className="my-4 font-bold text-2xl md:text-brandy-red md:text-4xl">
            Instructions
          </h2>
          <ol className="list-decimal mx-6 md:flex md:flex-col md:gap-2">
            <li className="my-2">
              <span className="font-bold">Beat the eggs:</span> In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li className="my-2">
              <span className="font-bold">Heat the pan:</span> Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>
            <li className="my-2">
              <span className="font-bold">Cook the omelette:</span> Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>
            <li className="my-2">
              <span className="font-bold">Add fillings (optional):</span> When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li className="my-2">
              <span className="font-bold">Fold and serve:</span> As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>
            <li className="my-2">
              <span className="font-bold">Enjoy:</span> Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        {separationLine()}
        <div className="my-6 text-wenge-brown flex flex-col items-center">
          <h2 className="text-2xl font-bold my-2 self-start md:text-brandy-red md:text-4xl">
            Nutrition
          </h2>
          <p className="my-2">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-4/6 my-2 flex flex-col gap-3">
            <tr className="flex justify-between">
              <td>Calories</td>
              <td className="font-extrabold md:text-brandy-red">277kcal</td>
            </tr>
            {separationLine()}
            <tr className="flex justify-between">
              <td>Carbs</td>
              <td className="font-extrabold text-left md:text-brandy-red">
                0g
              </td>
            </tr>
            {separationLine()}
            <tr className="flex justify-between">
              <td>Protein</td>
              <td className="font-extrabold text-left md:text-brandy-red">
                20g
              </td>
            </tr>
            {separationLine()}
            <tr className="flex justify-between">
              <td>Fat</td>
              <td className="font-extrabold text-left md:text-brandy-red">
                22g
              </td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
}
