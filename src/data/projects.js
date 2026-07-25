export const projects = [
  {
    id: "open-shelf",
    number: "01",
    category: "LIBRARY PLATFORM",
    title: "OpenShelf",
    description:
      "A modern digital library platform where users can discover books, reserve them, connect with authors, and manage their reading experience. It features secure authentication, subscriptions, real-time chat, reviews, and a powerful admin dashboard.",
    features: [
      "Browse and discover books, reserve titles, explore author profiles, save favorites, and leave ratings & reviews",
      "Secure Google OAuth authentication with a personalized dashboard, reading history, and real-time chat for seamless user engagement",
      "Subscription-based access with Stripe-powered payments, secure checkout, and automated membership management",
      "Comprehensive admin dashboard to manage books, users, reservations, subscriptions, payments, and Cloudinary-powered image uploads",
    ],
    tags: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Stripe",
      "Cloudinary",
      "Google Gemini 2.5 Flash API",
    ],
    image:
      "https://res.cloudinary.com/drvj2pqs7/image/upload/v1784897084/Screenshot_2026-07-24_184413_ekzyz9.png",
    live: "https://openshelfclient.vercel.app",
    client: "https://github.com/anika-chhoa/BookPass-Client.git",
    server: "https://github.com/anika-chhoa/BookPass-Server.git",
    challenges:
      "Faced several deployment issues while configuring the TypeScript production build, environment variables, authentication, CORS, and database connectivity, requiring careful debugging to ensure a stable and reliable deployment.",

    futurePlans: [
      "Suggest books based on users' reading history and interests",
      "Notify users about reservations, due dates, and new arrivals",
      "Speed up book borrowing and returns using QR codes",
      "Automatically calculate and apply overdue charges for books returned after the due date",
    ],
  },
  {
    id: "smart-nest",
    number: "02",
    category: "PROPERTY RENTAL PLATFORM ",
    title: "SmartNest",
    description:
      "SmartNest is a full-stack property rental and booking platform where property owners can list rental properties and tenants can discover, book, and securely pay reservation fees online. The platform provides a complete rental management system with role-based access control, secure authentication, online payments, booking management, analytics, and an intuitive dashboard for every user role.",
    features: [
      "Browse and search approved properties with advanced backend filtering, detailed listings, favorites, and a review & rating system.",
      "Secure property booking with Stripe reservation payments, real-time availability tracking, booking history, and payment confirmation.",
      "Role-based dashboards for Admins, Property Owners, and Tenants with JWT authentication and complete property, booking, and user management.",
      "Powerful owner tools for listing and managing properties, while admins can approve listings, monitor bookings, moderate reviews, and oversee platform activity.",
    ],
    tags: [
      "Next.js",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Better Auth",
      "JWT",
      "Stripe",
      "Recharts",
    ],
    image:
      "https://res.cloudinary.com/drvj2pqs7/image/upload/v1784893520/Screenshot_2026-07-24_174412_ymu5k0.png",
    live: "https://smart-nest-kappa.vercel.app",
    client: "https://github.com/anika-chhoa/smart-nest.git",
    server: "https://github.com/anika-chhoa/smart-nest-server.git",
    challenges:
      "Ensuring reliable booking confirmation during asynchronous Stripe payments was challenging. I solved this by using Stripe webhooks and atomic MongoDB updates to maintain data consistency and prevent duplicate or incomplete bookings.",
    futurePlans: [
      "Personalized rental suggestions based on user history and favorites",
      "Google Maps Integration for location-based property search",
      "Email Notifications for booking updates, property approvals, and payments",
      "Direct messaging between tenants and property owners using WebSockets",
    ],
  },
  {
    id: "drive-fleet",
    number: "03",
    category: "CAR RENTAL PLATFORM",
    title: "DriveFleet",
    description:
      "Full-stack car rental platform to browse, book, and manage car listings with a JWT-authenticated user dashboard.",
    features: [
      "Browse and search cars by name, brand, or category with advanced filtering and detailed vehicle information before booking.",
      "Flexible booking system with optional driver selection, real-time availability tracking, booking history, and rental status updates.",
      "Secure JWT/cookie-based authentication with Google login to protect private routes and ensure safe access to user accounts.",
      "Role-based management for users and admins, enabling users to add, update, and manage car listings while admins oversee bookings and platform activities.",
    ],
    tags: [
  "Next.js",
  "Express.js",
  "MongoDB",
  "JWT Authentication",
  "Tailwind CSS",
  "DaisyUI",
  "Framer Motion",
  "React Icons",
  "React Hot Toast",
],
    image: "https://i.ibb.co/M5RSHRCJ/Screenshot-2026-05-24-164004.png",
    live: "https://drive-fleet-client-three.vercel.app",
    client: "https://github.com/anika-chhoa/drive-fleet.git",
    server: "https://github.com/anika-chhoa/drive-fleet-server.git",
    challenges:
      "Implementing secure JWT authentication with HTTP-only cookies while maintaining protected routes across both client and server. Managing complex booking logic, including preventing duplicate bookings and handling real-time car availability. Optimizing search and filtering functionality with MongoDB queries while keeping the UI fast and responsive on all devices.",
    futurePlans: [
      "Add online payment integration",
      "Implement advanced car availability scheduling",
      "Introduce user reviews and ratings",
      "Build an admin dashboard for managing users, bookings, and car listings",
    ],
  },
];
