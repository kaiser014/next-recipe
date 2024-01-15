import ingredients from '../../ingredients.json';
import RecipeList from './components/RecipesList';

export default function Home() {
  return (
    <main className="p-4">
      {/* <h1 className="text-2xl font-bold text-center py-3">Recipe app</h1> */}
      <RecipeList />
    </main>
  )
}
