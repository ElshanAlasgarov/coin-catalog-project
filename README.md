# Precious Coin Catalog Web Application

A web application for browsing, searching, and managing a catalog of precious coins, categorized as commemorative, investment, and exclusive coins.

## Features

### User Interface
- **Main Page**:
  - Links to three catalog sections (Commemorative, Investment, Exclusive).
  - Search filter with dynamic updates.
- **Coin List**:
  - Two-column layout with pagination and adjustable items per page.
  - Each coin entry includes a small image and short description.
  - Clicking on a coin opens a detailed information page.
- **Detailed Coin Page**:
  - Displays coin name, obverse/reverse photos, detailed description, and characteristics.
  - Includes similar coins section and "Recently Viewed Coins."

### Search & Filters
- Search by name, short description, or detailed description with prioritized results.
- Advanced filters: price range, year range, country, metal, and minting quality.

### Administrative Panel
- Restricted access for admins to add, edit, or delete coins.
- Coin parameters: name, denomination, year, price, country, metal, quality, weight, and photos.
- Image upload supported (Ant Design).
- Displays browsing statistics.

### Additional Features
- Shopping cart for coin purchases.
- Tracks and displays coin view statistics.

## Technical Requirements
- **Frontend**: React SPA.
- **Backend**: Node.js with MySQL.
- **API**: RESTful.
- **Responsive Design**: Mobile-friendly.

## Setup Instructions
1. Clone the repository.
2. Backend setup:
   ```bash
   cd coin_catalog_server
   npm install
   npm start
   ```
3. Database:
   - Import MySQL schema and seed data.
   - Configure `.env` for credentials.
4. Frontend setup:
   ```bash
   cd coin_catalog_server
   npm install
   npm start
   ```
5. Access at `http://localhost:3000`.

---


