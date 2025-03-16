// src/utils/auth.js

// Function to get the token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return getAuthToken() !== null;
};

// Function to remove token from localStorage (for logout)
export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};

// Function to set the auth token in localStorage
export const setAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};
