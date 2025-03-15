import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecipeProvider } from './context/recipeContext';  // Import RecipeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeProvider> {/* Wrap App with RecipeProvider */}
      <App />
    </RecipeProvider>
  </StrictMode>,
)
