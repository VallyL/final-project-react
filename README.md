React MUI E-commerce Application

- This project is a full-stack e-commerce application built with React, Redux, MUI, and a backend API. The application enables users to browse products, add items to their carts, manage their orders, and view their cart details.

Features:
- Product Browsing: Users can explore a catalog of products categorized by different categories.
- Product Details: Detailed information about each product is displayed, including images, descriptions, and pricing.
- Cart Management: Users can add items to their cart, update quantities, and remove items.
- Order Processing: Users can place orders with their chosen items, providing their contact information.
- MUI Library: Utilizes the Material-UI library for a visually appealing and responsive user interface.
- Redux: Manages application state, including cart items, order details, and product data.
- React Router: Enables client-side navigation between different pages, providing a smooth user experience.
- Backend API: Communicates with a backend API for fetching product data, managing orders, and other business logic.

Project Structure:
- The project is divided into a 'client' folder for the frontend and a 'server' folder for the backend.

Key Components:
- Frontend:
  - Pages for browsing products, viewing product details, managing the cart, and checkout.
  - Redux slices for managing application state (products, cart, orders).
  - MUI components for building the UI.
  - Axios for making requests to the backend API.
- Backend:
  - Node.js Express server to handle API requests.
  - Sequelize ORM for interacting with the SQLite database.
  - Models for representing database entities (products, categories, orders).
  - Controllers for handling API logic and data retrieval.
  - Routes to define API endpoints.

Client Folder Structure:
 
client/
  |- src/
  |   |- assets/
  |   |   |- icons
  |   |   |- images
  |   |   |- styles
  |   |- components/
  |   |   |- AllCategoriesComponent
  |   |   |  |- index.jsx
  |   |   |- AllProductsComponent
  |   |   |  |- index.jsx
  |   |   |- AllSalesComponent
  |   |   |- CartComponent
  |   |   |- CartHeading
  |   |   |- CheckDiscount
  |   |   |- DiscountRequest
  |   |   |- Footer
  |   |   |- Header
  |   |   |- OneCategoryComponent
  |   |   |- OneProductComponent
  |   |   |- SmallCategories
  |   |   |- SmallDiscountedContainer
  |   |- pages/
  |   |   |- AllProductsPage
  |   |   |  |- index.jsx
  |   |   |- AllSalesPage
  |   |   |  |- index.jsx
  |   |   |- CartPage
  |   |   |- CategoryPage
  |   |   |- ErrorPage
  |   |   |- HomePage
  |   |   |- OneCategoryPage
  |   |   |- ProductPage
  |   |- redux/
  |   |   |- cartSlice.js
  |   |   |- categoriesSlice.js
  |   |   |- discountSlice.js
  |   |   |- orderSlice.js
  |   |   |- productsSlice.js
  |   |   |- store.js 
  |   |- App.js
  |   |- index.js
  |   |- ... 
  |- ... 

Frontend Libraries:
- React: The core JavaScript library for building user interfaces.
- React Router DOM: For client-side routing and navigation.
- Redux: A state management library to manage and share application data between components.
- Redux Toolkit: Simplifies Redux development with helpful features like actions, reducers, and asynchronous logic.
- Material-UI (MUI): A React component library based on Google's Material Design principles, providing pre-built UI components for a consistent look and feel.
- axios: A promise-based HTTP client library for making API requests to your backend.
- @emotion/react & @emotion/styled: CSS-in-JS libraries for writing styles directly within your React components.

Getting Started:
 1. Clone the repository:
    git clone <repository-url>
 2. Install dependencies:
    npm install
 3. Start the server:
    cd server
    npm run dev
 4. Start the client:
    cd client
    npm start

Contributing:
- Contributions to this project are welcome! Feel free to submit pull requests for bug fixes, enhancements, or new features.
