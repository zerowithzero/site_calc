# SiteCalc — Civil Engineer Toolbox 👷‍♂️📏

**SiteCalc** is an offline-ready, browser-based utility suite designed for civil engineers, site supervisors, and students. It combines essential structural calculators, material estimators, and site analysis tools into a single, cohesive interface that works without a backend server.

## 🚀 Features at a Glance

*   **Structural Calculators**: Beam Analysis (Point Load), RC Column Capacity (Axial), Slope & Gradient.
*   **Material Estimators**: Concrete Mix Design (M10-M25) & Construction Material Database.
*   **Quantity Takeoff**: Create, edit, and export Bill of Quantities (BOQ).
*   **Digital Sketchpad**: Draw rough site plans and measure distances with custom scaling.
*   **Site Tools**: GPS Geolocation & Live Weather data (OpenWeatherMap integration).
*   **PDF Reporting**: Generate professional project reports with one click.
*   **Offline First**: No internet required after initial load (except for weather/maps).

## 🛠️ Usage

### Running Locally
Since this is a static site, you can open `index.html` directly in your browser. However, for the best experience (and to avoid CORS issues with some browser security settings), it's recommended to serve it locally.

1.  **Using Python (Recommended)**:
    ```bash
    # Run in the project directory
    python -m http.server 8000
    # Open http://localhost:8000 in your browser
    ```
2.  **Using VS Code Live Server**:
    *   Install the "Live Server" extension.
    *   Right-click `index.html` -> "Open with Live Server".

### Application Sections

1.  **Dashboard**: Quick access to all main tools.
2.  **Calculators**: Select a specific calculator from the top tabs. Enter parameters and click "Calculate".
3.  **Sketch & Measure**:
    *   Click "Pencil" icon to draw lines.
    *   Set "Scale" (e.g., 0.05m per pixel) to get real-world measurements.
    *   Click "Trash" to clear the canvas.
4.  **Quantity Takeoff**:
    *   Add items for your BOQ.
    *   Enter Unit, Quantity, and Rate. Amount is auto-calculated.
    *   Click "Export PDF" in the header to download the full report.
5.  **Settings**:
    *   Enter your Name, Project, and Client details for the report header.
    *   (Optional) Enter your [OpenWeatherMap API Key](https://openweathermap.org/api) for live weather data.

## 📂 Project Structure

```
/
├── css/
│   └── style.css       # Custom styles & Tailwind utilities
├── scripts/
│   ├── config.js       # Constants, Material DB, Unit Factors
│   └── main.js         # Core application logic & UI handling
├── index.html          # Main application entry point
└── README.md           # This file
```

## 📦 Dependencies (CDN)

*   **Tailwind CSS**: Styling framework.
*   **Lucide Icons**: Vector icons.
*   **Math.js**: Mathematical functions.
*   **jsPDF & AutoTable**: PDF generation.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ for Civil Engineers*
