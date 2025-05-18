# Rick & Morty
🌐 [Rick&Morty](https://prueba-guarapo.vercel.app/)
This is a technical test for the role Frontend React for the company Guarapo Labs.

<pre> 
rickMorty/ 
├── src/ 
│ ├── assets/ # Static resources (images, fonts) 
│ ├── components/ # Reusable components 
│ ├── navigation/ # Navigation components 
│ ├── pages/ # Main views/pages 
│ └── services/ # API and service logic
</pre>

🧠 Architecture Overview
🧩 Pattern
Component-based architecture following React principles.

Modular and scalable structure for maintainability.

🧱 Main Layers
🖼️ Presentation
UI components stored in /components

Main views/pages in /pages

Styled using React Bootstrap

🔀 Navigation
Managed using React Router DOM

Navigation logic inside /navigation

🔌 Services
API calls centralized in services/GetData.js

Data fetched from the Rick & Morty API

🧰 Design Patterns Used
Container/Presentational Pattern
e.g., separation between layout and logic in components like Card

Custom Hooks Pattern
For managing state and side effects in a reusable way

Composition Pattern
Nesting of components to build flexible UIs

⚙️ State Management
Local state handled with useState and useEffect

Data passed via props drilling

🌟 Features
✅ Modular and reusable components

✅ Clear separation of concerns

✅ Atomic component design

✅ Responsive and mobile-friendly UI

✅ Centralized error handling for data fetching

🧪 Technologies Used
React

React Router DOM

React Bootstrap

Axios (or Fetch, depending on your implementation)

Rick and Morty API


