#  CareFinder App  

CareFinder is a web application that helps users easily search, explore, and connect with hospitals, professionals, and businesses within their community. The app is designed to make healthcare and related services more accessible by providing a platform where users can find verified hospitals, view details, and interact with service providers.  



##  Features  

-  **Search Hospitals**: Search and filter hospitals by name or location  
-  **Hospital Profiles**: View individual hospital details such as name, address, and contact information  
-  **Hire a Professional**: Talents can post their availability for work, and employers can contact them  
-  **Job Openings**: Startups and businesses can share job opportunities  
-  **Blog**: Interactive space for businesses and talents to share updates, articles, and resources  
-  **User Authentication**: Secure login and signup, with access to specific features only for registered users  
-  **Responsive Design**: Works seamlessly across mobile and desktop screens  



##  Technologies Used  

- React + Vite (with Hooks)  
- Redux Toolkit (for global state management)  
- Tailwind CSS (for styling)  
- Firebase (Realtime Database, Authentication, and Hosting)  
- React Router (for routing between pages)  



##  Installation  

```bash
# Clone the repository
git clone https://github.com/bojodiva/carefinder-app.git  

# Navigate into the project directory
cd carefinder-app  

# Install dependencies
npm install  

# Start the development server
npm run dev
```


##  Usage
- Use the search bar on the homepage to find hospitals
- Click "See More" to view hospital details on an individual page
- Sign up or log in to access features like hiring professionals, posting jobs, and interacting on the blog
- Explore businesses and professionals through a structured and user-friendly interface


## 📂 Code Structure
```bash
src/
 ├── components/   # Reusable components (Firebase setup, HospitalImage, etc.)
 ├── pages/        # Pages like AddBusiness, ExploreBusiness, IndividualPage
 ├── redux/        # Redux slices and store
 ├── App.jsx       # Root component with routing
 └── main.jsx      # Entry point
```


Open the app in your browser at: [Carefinder App](authentication-57736.web.app/)

