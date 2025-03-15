
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/app.css";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import RecipeSearch from './components/recipes/RecipeSearch';
import RecipeDetail from "./components/recipes/RecipeDetail";
import Favorites from "./components/recipes/Favorites";
import About from "./components/pages/About";
import UserAccount from "./components/pages/UserAccount";
import NotFound from "./components/pages/NotFound";
import Category from "./components/recipes/Category";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,  
    children: [
      { index: true, element: <Home /> },  // Home Page
      { path: "search", element: <RecipeSearch /> },
      { path: "recipe/:recipeId", element: <RecipeDetail /> },  // Dynamic recipe detail route
      { path: "favorites", element: <Favorites /> },
      { path: "about", element: <About /> },
      { path: "account", element: <UserAccount /> },
      { path: "category/:type", element: <Category /> },  // Dynamic category route
      { path: "*", element: <NotFound /> },  // Catch-all for 404
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;




