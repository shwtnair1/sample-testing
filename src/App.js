import "./App.css";
import RecipeCard from "./modules/RecipeCard";
import RecipesList from "./modules/RecipesList";
import ThemeProvider from "./components/ThemeProvider";

const mockData = {
  id: "5f4d4a7e62fb0224951e7ec4",
  name: "Chicken Sausage & Spinach Ravioli",
  slug: "chicken-sausage-spinach-ravioli",
  headline: "with Tomato & Lemon",
  image:
    "https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg",
  selected: 1,
  selectionLimit: 1,
  extraCharge: 0,
  yields: 2,
};

function App() {
  return (
    <ThemeProvider>
      <RecipesList />
    </ThemeProvider>
  );
}

export default App;
