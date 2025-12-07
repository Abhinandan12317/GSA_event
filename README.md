# Gemini-CLI Learn and Build Event Portal

This is a 3D interactive web application built with React, Three.js, and Material-UI for the "Gemini-CLI Learn and Build" event.

## Setup

1.  **Install Dependencies:**
    Make sure you have Node.js and npm installed. Then, from the project root directory, run:
    ```bash
    npm install
    ```

## Running the Application

1.  **Start Development Server:**
    To run the application in development mode, execute:
    ```bash
    npm run dev
    ```
    This will typically start the app on `http://localhost:5173` (or another available port). Open this URL in your web browser.

2.  **Build for Production:**
    To create a production-ready build of the application, run:
    ```bash
    npm run build
    ```
    This will generate optimized static files in the `dist` directory.

## Customization

### Speaker Images

The "About the Speakers" section uses placeholder images named `1.jpg`, `2.jpg`, and `3.jpg` located in the `src/assets` folder. **Please replace these empty files with the actual speaker photos.** Ensure the new images are also named `1.jpg`, `2.jpg`, and `3.jpg` respectively for Abhinandan, Lakshmi M, and Bhuvan D N.

### Content

All text content (event name, venue, time, speaker descriptions, contact number) can be modified within the respective React components (`src/App.jsx`, `src/components/Hero.jsx`, `src/components/About.jsx`, `src/components/Footer.jsx`).

### 3D Elements

The 3D elements (boxes, spheres, toruses) and their colors and animations can be adjusted in `src/App.jsx` and `src/components/ThreeDElements.jsx`. Feel free to experiment with different shapes, positions, colors, and animation speeds to create a unique visual experience. Google's primary colors are:

*   Blue: `#4285F4`
*   Red: `#DB4437`
*   Yellow: `#F4B400`
*   Green: `#0F9D58`

## Features

*   **Interactive 3D Background:** Engaging 3D elements using Three.js and React Three Fiber.
*   **Event Details:** Clearly displays event name, venue, and time.
*   **Registration Button:** Links directly to the provided Google Forms registration page.
*   **Speaker Information:** Dedicated section for Google Student Ambassadors with their details.
*   **Contact Information:** Abhinandan's contact number in the footer.
*   **Responsive Design:** Built with Material-UI components for a modern and adaptive interface.