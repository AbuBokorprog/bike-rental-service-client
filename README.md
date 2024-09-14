# RentmyRide

## Table of Contents

- [Introduction](#introduction)
- [Project Description](#project-description)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation Guideline](#installation-guideline)
- [Usage](#usage)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [Licensing](#license)

## Introduction

RentmyRide is a user-friendly, fully functional frontend for a Bike Rental Booking System. This system integrates with a backend, providing users with a seamless experience in bike rentals, user authentication, booking management, and advanced features for both users and admins.

## Project Description

RentmyRide allows users to browse and book bikes, manage their rentals, and interact with an easy-to-use bike booking process. It provides user authentication for regular users and administrators, who can manage bikes, bookings, and users. This system aims to deliver a smooth user experience and efficient rental management.

## Features

- **Public Pages**: Home, About Us, Bike Listings, Contact Us.
- **User Authentication**: Sign Up, Login, Profile Management.
- **Bike Management**: Search, Filter, View Bike Details, Booking.
- **Booking Process**: Book Now, Payment Integration, Rental Confirmation.
- **Rental Management**: View Rentals, Pay for Unpaid Rentals, Return Bike.
- **Admin Pages**: Manage Bikes, Users, and Rentals.
- **Error Handling**: Toast notifications, validation error messages, custom 404 page.
- **Responsive Design**: Mobile-friendly and cross-browser compatible.

## Technology Stack

- **Frontend**: React, Redux, React Hook Form, Zod, Tailwind CSS, MUI, Framer Motion, Swiper, SweetAlert2.
- **State Management**: Redux Toolkit, Redux Persist.
- **Authentication**: JWT.
- **API Integration**: React-Redux, RTK Query.
- **Additional Libraries**: React Icons, React Image Gallery, Sonner and swal for notifications.

## Installation Guideline

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v14.x or higher
- **npm**

### Installation Steps

**Frontend:**

1. Clone the repository:
   ```bash
   git clone https://github.com/AbuBokorprog/rentmyride-client
   ```
2. Navigate to the project directory:
   ```bash
   cd rentmyride-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

**Backend:**

1. Clone the repository:
   ```bash
   git clone https://github.com/AbuBokorprog/rentmyride-server
   ```
2. Navigate to the project directory:
   ```bash
   cd rentmyride-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

**Backend:**

1. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT= 5000
   MONGODB_URL= mongodb url
   SALT=12
   NODE_ENV= 'development'
   JWT_SECRET= bd4a66b97b180f87614be34da40cc519ced3dc62f93b5e8d93cd4b98c4aca9fd
   EXPIRES_IN=7d
   BASE_URL : https://sandbox.aamarpay.com/jsonpost.php
   STORE_ID : aamarpaytest
   SIGNATURE_KEY : dbb74894e82415a2f7ff0ec3a97e4183
   VALIDATION_URL : https://sandbox.aamarpay.com/api/v1/trxcheck/request.php
   ```

   Adjust the configuration variables based on your environment.

## Usage

### Running the Project

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
2. Open the app in your browser at `http://localhost:3000`.

### Public Pages

1. **Home Page**:
   - Hero section with a search bar for bike availability.
   - Featured available bikes with a "View Detail" button.
   - Testimonials and a "Why Choose Us" section.
   - Contact form with name, email, and message fields.
2. **Bikes**:

- **Bike Listing Page**: Filter bikes based on brand, model, and availability.
- **Bike Detail Page**: Displays detailed bike info with a "Book Now" button for booking the bike.
- **Booking Process**: A form for selecting start time and making an advanced payment of Tk 100. Successful bookings update bike availability.

3. **About Us**:
   - Mission statement, team profiles, and contact details.

### User Authentication

- **Sign Up**: Users register with name, email, password, phone, and address.
- **Login**: Users log in with email and password.
- **Profile Management**: Users can view and update personal information like name, email, phone, and address.

### User Dashboard

1. **User Profile Management**:
   -Display user details such as Name, Email, Phone, Address and if you want you can add other information
   -Allow user to update their profile information.
2. **Rental Management**:
   - In this page have tab system having four tabs -All Rentals, Paid, Unpaid and Confirmed. If the rental unpaid there have pay button.
   - User can pay due cost.

### Admin Dashboard

1. **Profile Management**:
   -Display user details such as Name, Email, Phone, Address and if you want you can add other information
   -Allow user to update their profile information.
2. **Bike management**:
   - Manage types, bikes, users, and bookings.
   - Create, update, or delete bike listings.
   - Promote users to admin role.
3. **Type management**:
   - Manage types.
   - Create, update, or delete type listings.
4. **Users management**:
   - Manage users.
   - Promote or delete User listings.
5. **Rental Management**:
   - Handle rental returns and calculate the total cost based on rental period.

## Authentication

- **User**:
  - Email: user@gmail.com
  - Password: password123
- **Admin**:
  - Email: admin@gmail.com
  - Password: password123
- **Super Admin**:
  - Email: suparadmin@gmail.com
  - Password: superadmin@

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code address to the existing style and that you have added tests for any new functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
