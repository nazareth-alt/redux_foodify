import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const EDAMAM_API_URL = "https://api.edamam.com/api/recipes/v2";
const APP_ID = process.env.EDAMAM_APP_ID;
const APP_KEY = process.env.EDAMAM_APP_KEY;

// Endpoint to fetch the recipe details by ID
app.get("/api/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Fix the URL by making sure it's just the ID
    const response = await axios.get(`${EDAMAM_API_URL}/${id}`, {
      params: {
        type: "public",
        app_id: APP_ID,
        app_key: APP_KEY,
      },
    });
    res.json(response.data);  // Send the response back
  } catch (error) {
    console.error(error.message);  // Log the error message for debugging
    res.status(500).json({ error: "Failed to fetch recipe details" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
