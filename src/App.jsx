
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/app.css";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import RecipeSearch from './components/recipes/RecipeSearch';
import RecipeDetail from "./components/recipes/RecipeDetail";
import Favorites from "./components/recipes/Favorites";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Category from "./components/recipes/Category";
import RecipesPage from "./components/pages/RecipesPage"; // Your recipes page
import ContactsPage from "./components/pages/ContactsPage";






const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,  
    children: [
      { index: true, element: <Home /> },  // Home Page
      { path: "search", element: <RecipeSearch /> },
      { path: "recipe/:id", element: <RecipeDetail /> },  // Dynamic recipe detail route
      { path: "favorites", element: <Favorites /> },
      { path: "about", element: <About /> },
      { path: "category/:type", element: <Category /> },  // Dynamic category route
      { path: "recipes", element:<RecipesPage />},
      { path: "contact", element: <ContactsPage /> },  // Added Contact Page
      { path: "*", element: <NotFound /> },  // Catch-all for 404
    
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;




