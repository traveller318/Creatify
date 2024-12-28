# Creatify - Real-time Collaborative Whiteboard

A powerful, real-time collaborative whiteboard platform that enables teams to ideate, design, and plan together seamlessly. Built with modern web technologies, Creatify provides an infinite canvas for your creativity.

## ✨ Features

### Core Functionality
- 🤝 **Real-time Collaboration**: Work together with your team in real-time
- 🎨 **Infinite Canvas**: Unlimited space for your ideas
- 🔄 **Live Updates**: Instant synchronization across all users
- 🎯 **Interactive UI**: Intuitive and responsive interface
- 🔒 **Secure**: Built-in authentication and organization management

### Advanced Features
- 🎨 **Advanced Color Picker**: 
  - Infinite color combinations
  - Debounced color selection for smooth experience
  - Last used color memory

- 🔍 **Enhanced Selection Tool**:
  - Precise selection mechanism
  - Quick duplicate functionality
  - Smart layer management

- 📤 **Export Capabilities**:
  - Export boards as PNG
  - High-quality image export

- 🎯 **User Experience**:
  - Camera reset functionality
  - Board creation limits (5 per organization)
  - Improved search and favorites system

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) - React framework for production
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - High-quality UI components
- **Backend**: [Convex](https://www.convex.dev/) - Backend infrastructure
- **Real-time Engine**: [Liveblocks](https://liveblocks.io/) - Collaboration features
- **Authentication**: [Clerk](https://clerk.com/) - User management

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/traveller318/Creatify.git
   cd Creatify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create `.env.local` in root directory
   - Copy variables from `.env.example`
   - Fill in your configuration values

4. **Clerk Configuration**
   1. Enable Organization features
   2. Create "convex" JWT Template
   3. Configure Claims (`org_id` and `org_role`)
   4. Update `auth.config.js` in /convex

5. **Initialize Convex**
   ```bash
   npx convex dev
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see your application running.


## 🌐 Deployment

The live version is deployed on Vercel: [Visit Creatify](https://creatify-seven.vercel.app)



---

Built with ❤️ using Next.js, Convex, and Liveblocks