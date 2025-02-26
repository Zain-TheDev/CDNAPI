# CDN Freelancer Directory

## Overview
A fictional company, CDN - Complete Developer Network, a Freelancer Directory of web application built using ASP.NET Core Web API and React. It allows users to register, view, update, and delete freelancer details, including their skills and hobbies.

## Features
- **User Registration**: Add new freelancers with username, email, phone number, skillsets, and hobbies.
- **View Users**: Display a list of registered freelancers.
- **Update User**: Modify freelancer details directly from the UI.
- **Delete User**: Remove freelancers from the directory.
- **RESTful API**: Built using ASP.NET Core Web API with a structured database.

## Technologies Used
- **Backend**: ASP.NET Core 6, Entity Framework Core, SQLite (DB Browser used for database management)
- **Frontend**: React, Axios, Bootstrap
- **Version Control**: Git & GitHub

## Installation

### Prerequisites
Ensure you have the following installed:
- .NET 6 SDK
- Node.js and npm
- Visual Studio 2022
- SQLite (for database management)

### Clone the Repository
```sh
git clone https://github.com/Zain-TheDev/CDNAPI.git
cd CDNAPI
```

### Backend Setup
1. Navigate to the backend project folder:
   ```sh
   cd CDNAPI
   ```
2. Restore dependencies:
   ```sh
   dotnet restore
   ```
3. Run database migrations (if applicable):
   ```sh
   dotnet ef database update
   ```
4. Run the backend API:
   ```sh
   dotnet run
   ```

### Frontend Setup
1. Navigate to the frontend project folder:
   ```sh
   cd cdn-client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

### Access the Application
- **API Swagger Documentation**: `https://localhost:7040/swagger/index.html`
- **Frontend UI**: `http://localhost:3000`

## API Endpoints
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | /api/users      | Get all users |
| POST   | /api/users      | Add a new user |
| PUT    | /api/users/{id} | Update user details |
| DELETE | /api/users/{id} | Delete a user |

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For any questions or issues, feel free to open an issue on GitHub or reach out to me.

