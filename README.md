## SocioGram

This is a social media application that allows users to create accounts, log in, share posts publicly, manage their profiles, and comment and like other posts. It provides a responsive design optimized for various devices. The backend is developed using Node.js with Express with MySQL Database, and the frontend is developed using React.js.

### Features

1. **User Registration and Authentication:**
   - Secure registration using username, email and password and login using username and password.

2. **View and Add Posts:**
   - Users can view all public posts of their friends.
   - Users can add posts from their account, visible to all users.

3. **Profile Management:**
   - Users can view and update their profiles.
   - Profile includes information such as name, city, website, etc.

4. **User Experience:**
   - Intuitive and responsive user interface.
   - Easy navigation and visually appealing design.

5. **Deployment:**
   - Both frontend and backend components are deployed to suitable hosting services.

### Technologies Used

- Backend:
  - Node.js
  - Express.js
  - MySQL
- Frontend:
  - React.js
  - React Router
- Deployment:
  - Hosting service 
- Others:
  - Axios (for making HTTP requests)
  - React Query (for data fetching and caching)

### Screenshots

Register page
<img width="959" alt="image" src="https://github.com/dhivyashankar12/sociogram/assets/94692935/4de00f99-bf7a-4eef-882a-d203aefebcb4">

Login page
<img width="959" alt="image" src="https://github.com/dhivyashankar12/sociogram/assets/94692935/96a962de-4b1f-4a6d-8af6-154ba08e4ef9">

Home page
<img width="959" alt="image" src="https://github.com/dhivyashankar12/sociogram/assets/94692935/63507ee7-9684-4d0f-a763-357f8095f897">

Profile page
<img width="959" alt="image" src="https://github.com/dhivyashankar12/sociogram/assets/94692935/5ab1822b-0e53-4f9a-b224-3e013b454ed6">

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   cd client 
   npm install
   cd api
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the backend directory and add necessary environment variables like database connection URI, JWT secret, etc.

4. Run the application:

   ```bash
   cd client
   npm start
   cd api
   npm start
   ```
