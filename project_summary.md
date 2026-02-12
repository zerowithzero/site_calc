# Project Summary: SiteCalc — Civil Toolbox

## Overview
**SiteCalc** is a lightweight, offline-friendly web application designed specifically for civil engineers, site supervisors, and engineering students. It functions as a digital "Swiss Army Knife" for construction sites, providing essential calculation tools, quantity estimation utilities, and site analysis features in a single, accessible interface.

The application runs entirely in the browser using modern HTML5, CSS3 (Tailwind), and JavaScript, requiring no backend server. It persists user data and project settings via local storage, ensuring data privacy and availability even in remote locations with poor internet connectivity.

## Problem Solved
Civil engineers often face several challenges on-site:
1.  **Dependency on Multiple Tools**: Engineers often juggle separate apps for unit conversion, structural calculations, and note-taking.
2.  **Lack of Connectivity**: Construction sites frequently have poor internet access, making cloud-based tools unreliable.
3.  **Manual Estimation Errors**: Quick "back-of-the-envelope" calculations for materials (like concrete mixes) or BOQs are prone to human error.
4.  **Reporting Friction**: Compiling simple site reports or material lists usually requires returning to the office to use desktop software.

**SiteCalc solves these by:**
*   Bundling critical tools (Beam calc, RC column check, Mix design) into one responsive app.
*   Operating offline after initial load.
*   Providing standardized, error-free automated calculations.
*   Generating instant PDF reports directly from the browser for immediate sharing.

## Key Features

### 1. Structural & Material Calculators
A suite of specialized calculators for quick design verification:
*   **Beam Analysis**: Calculates reactions and maximum bending moment for simply supported beams with point loads. Useful for quick checks on lintels or secondary beams.
*   **RC Column Capacity**: Estimates the axial load carrying capacity of short reinforced concrete columns based on IS 456 simplified formulas.
*   **Concrete Mix Design**: Generates material requirements (Cement, Sand, Aggregate) for standard concrete grades (M10, M15, M20, M25).
*   **Slope & Gradient**: Converts between rise/run, degrees, and percentage slopes.
*   **Unit Converter**: dedicated converter for civil engineering units (Length, Area, Force, Pressure/Stress).

### 2. Digital Sketchpad & Measurement
*   **Canvas Drawing**: Allows users to sketch simple site plans or details directly on the screen.
*   **Scale Functions**: supports setting a custom pixel-to-meter scale to measure approximate distances and lengths from sketches.

### 3. Quantity Takeoff (BOQ) Generator
*   **Dynamic Entry**: Users can create a Bill of Quantities by adding items, units, quantities, and rates.
*   **Auto-Calculation**: Automatically computes line item totals and grand project totals.
*   **Persistence**: Saves lists locally so work isn't lost on page refresh.

### 4. Materials Database
*   **Searchable Library**: A built-in database of common construction materials providing properties like Density, Characteristic Strength, and Elastic Modulus.
*   **Filtering**: Quick keyword search to find specific material properties.

### 5. Site Analysis Tools
*   **Geolocation**: Fetches current GPS coordinates (Latitude/Longitude) with accuracy data.
*   **Weather Integration**: Connects to OpenWeatherMap API (user-provided key) to show real-time temperature, wind, and humidity data for the site location.

### 6. Reporting & Export
*   **PDF Generation**: Uses `jspdf` to compile a professional project report.
*   **Report Content**: Includes project metadata (Client, Engineer), site conditions (Geo/Weather), all active calculation results, and the full Bill of Quantities table.

## Technical Highlights
*   **Stack**: Vanilla JavaScript, Tailwind CSS (via CDN), HTML5.
*   **Storage**: `localStorage` used for state management (Settings, BOQ items).
*   **Responsiveness**: Mobile-first design ensures usability on smartphones and tablets.
*   **Libraries**:
    *   `mathjs`: For calculation precision.
    *   `jspdf` & `jspdf-autotable`: For client-side PDF generation.
    *   `lucide`: For crisp, vector-based UI icons.
