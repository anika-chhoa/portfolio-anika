export const projects = [
  {
    id: "drive-fleet",
    number: "01",
    category: "CAR RENTAL PLATFORM",
    title: "DriveFleet",
    description:
      "Full-stack car rental platform to browse, book, and manage car listings with a JWT-authenticated user dashboard.",
    tags: ["Next.js", "Express.js", "JWT"],
    image: "https://i.ibb.co/M5RSHRCJ/Screenshot-2026-05-24-164004.png",
    live: "https://drive-fleet-client-three.vercel.app",
    code: "https://github.com/anika-chhoa/drive-fleet.git",
    challenges: "Implementing secure JWT authentication with HTTP-only cookies while maintaining protected routes across both client and server. Managing complex booking logic, including preventing duplicate bookings and handling real-time car availability. Optimizing search and filtering functionality with MongoDB queries while keeping the UI fast and responsive on all devices.",
    futurePlans: "Add online payment integration, implement advanced car availability scheduling, introduce user reviews and ratings, and build an admin dashboard for managing users, bookings, and car listings.",
  },
  {
    id: "sun-cart",
    number: "02",
    category: "E-COMMERCE",
    title: "Sun Cart - Summer Essentials",
    description:
      "A modern summer essentials e-commerce platform built with Next.js, featuring product browsing, category-based filtering, and a smooth user experience. Designed with a clean, responsive UI to help users explore and purchase seasonal items such as clothing, accessories, skincare, and gadgets efficiently.",
    tags: ["Next JS", "Tailwind", "Better Auth"],
    image: "https://i.ibb.co/hxc4cSR4/Screenshot-2026-05-02-182030.png",
    live: "https://sun-cart-sooty.vercel.app/",
    code: "https://github.com/anika-chhoa/sun-cart.git",
    challenges: "Implementing a secure and seamless authentication system using Better Auth while maintaining performance. Managing complex state for filtering and cart functionality across multiple pages.",
    futurePlans: "Integrate a real payment gateway (Stripe), implement a review system for products, and add an admin dashboard for inventory management.",
  },
  {
    id: "keen-keep",
    number: "03",
    category: "FRIENDSHIP TRACKER PLATFORM",
    title: "KeenKeeper",
    description:
      "A modern and responsive web application designed to help you maintain meaningful connections with your friends by tracking interactions, setting goals, and visualizing your communication patterns.",
    tags: ["Next.js", "Tailwind", "App Router"],
    image: "https://i.ibb.co/HDGp71X5/Screenshot-2026-05-24-164953.png",
    live: "https://keen-keep-next.vercel.app",
    code: "https://github.com/anika-chhoa/keen-keep-next.git",
    challenges: "Managing and sorting timeline interactions accurately using ISO timestamps and millisecond precision. Building responsive data visualizations with Recharts while ensuring smooth performance across devices. Maintaining clean state management for search, filter, and real-time interaction updates without affecting user experience.",
    futurePlans: "Add user authentication and cloud database integration, implement reminders for inactive friendships, introduce real-time chat and notifications, and provide advanced analytics with weekly and monthly communication insights."
  },
  
];
