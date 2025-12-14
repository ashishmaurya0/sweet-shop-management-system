# Sweet Shop Management System

A modern, full-stack web application for managing a sweet shop's inventory, built with React, TypeScript, and Supabase. This system allows administrators to manage sweets inventory while providing customers with an intuitive browsing experience.

## 🚀 Features

### Admin Panel
- **Inventory Management**: Add, edit, delete, and restock sweets
- **Sweet Categories**: Organize sweets by categories (chocolate, gummies, macarons, etc.)
- **Stock Tracking**: Real-time stock monitoring with low stock alerts
- **Image Management**: Upload and manage sweet images
- **Price Management**: Set and update pricing for all items

### Customer Experience
- **Browse Sweets**: Explore the complete catalog of sweets
- **Search & Filters**: Find sweets by category, price, or name
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Enhanced user experience with Framer Motion

### Authentication
- **User Registration**: Create new accounts
- **Login System**: Secure authentication for admin access
- **Role-based Access**: Separate views for customers and administrators

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Radix UI** - Accessible UI components
- **React Router** - Client-side routing
- **React Hook Form** - Form management with validation
- **Zod** - Schema validation
- **React Toastify** - Toast notifications

### Backend
- **Supabase** - Backend-as-a-Service for database and authentication

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Supabase account** for backend services

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sweet-shop-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your Supabase configuration:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
sweet-shop-management-system/
├── public/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AdminSweetForm.tsx    # Form for adding/editing sweets
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Header.tsx            # Site header with navigation
│   │   ├── SearchFilters.tsx     # Search and filter components
│   │   └── SweetCard.tsx         # Individual sweet display card
│   ├── pages/
│   │   ├── Admin.tsx             # Admin panel for inventory management
│   │   ├── Home.tsx              # Landing page
│   │   ├── Login.tsx             # User login page
│   │   ├── NotFound.tsx          # 404 error page
│   │   ├── Register.tsx          # User registration page
│   │   └── Sweets.tsx            # Sweets browsing page
│   ├── App.tsx                   # Main application component
│   └── index.tsx                 # Application entry point
├── index.html                    # HTML template
├── package.json                  # Project dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
└── README.md                     # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🎨 Design System

The application uses a cohesive design system with:

- **Primary Color**: Rose (#DC2626) for sweet-themed branding
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components built with Radix UI
- **Animations**: Smooth transitions and micro-interactions

## 🔐 Authentication & Security

- **Supabase Auth**: Secure authentication with JWT tokens
- **Role-based Access**: Admin and customer role separation
- **Protected Routes**: Admin routes require authentication
- **Data Validation**: Client and server-side validation with Zod

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with grid layouts
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Touch-friendly interface with mobile navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images sourced from [Unsplash](https://unsplash.com)
- Icons provided by [Lucide React](https://lucide.dev)
- UI components built with [Radix UI](https://www.radix-ui.com)

## 📞 Support

For support or questions, please open an issue in the GitHub repository or contact the development team.

---

**Made with ❤️ for sweet lovers everywhere**
