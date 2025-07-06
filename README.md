# Heidi Pan - Portfolio Website

A modern, responsive portfolio website built with Next.js showcasing my software development projects and skills.

## 🌟 Features

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Smooth animations and transitions with Framer Motion
- Clean, professional UI with custom styling
- Dark theme with accent colors

### 💼 **Portfolio Sections**
- **Home**: Introduction with animated elements and downloadable CV
- **Projects**: Dynamic project showcase with filtering system
- **Resume**: Professional experience and skills timeline
- **Contact**: Functional contact form with real-time validation

### 🤖 **AI-Powered Chat Assistant**
- Integrated OpenAI chatbot that answers questions about my background
- Custom-trained responses about skills, experience, and projects
- Interactive chat interface with typing animations
- Contextual responses about my development journey

### 📊 **Project Management**
- Database-driven project system with PostgreSQL
- Real-time project filtering by category (Web Development, Mobile Development, etc.)
- Admin capabilities for easy project management
- Technology stack tagging and project details

### 📧 **Contact Integration**
- Functional contact form powered by EmailJS
- Form validation and success notifications
- Direct email delivery with custom templates
- Professional inquiry handling

## 🛠️ **Tech Stack**

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### **Backend & Database**
- **Prisma** - Database ORM and schema management
- **PostgreSQL** - Database (hosted on Neon)
- **Next.js API Routes** - Serverless backend functions

### **AI & Integrations**
- **OpenAI API** - GPT-powered chatbot
- **EmailJS** - Contact form email service

### **Deployment & Tools**
- **Vercel** - Hosting and deployment
- **Git** - Version control
- **ESLint** - Code linting
- **npm** - Package management

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or Neon account)
- OpenAI API key
- EmailJS account

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Helloalpacaa/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="your_postgresql_connection_string"
   
   # OpenAI API
   OPENAI_API_KEY="your_openai_api_key"
   
   # EmailJS
   NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
   ```
   
   > **Security Note**: Never commit your `.env.local` file to version control. The `.gitignore` file already excludes environment files.

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 **Project Structure**

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── chat/          # OpenAI chatbot endpoint
│   │   │   └── projects/      # Projects data endpoint
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects showcase page
│   │   ├── resume/            # Resume/CV page
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable React components
│   │   ├── ui/               # UI components (buttons, inputs, etc.)
│   │   ├── ChatBot.tsx       # Floating chat widget
│   │   ├── EmbeddedChatBot.tsx # Main chat interface
│   │   └── ...               # Other components
│   └── lib/                  # Utility functions
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── ...config files
```

## 🎯 **Key Features Breakdown**

### **Project Filtering System**
- Dynamic filtering by project categories
- Smooth animations between filter states
- Maintains UI consistency when no projects match filter
- Easy to extend with new categories

### **AI Chatbot Integration**
- Custom OpenAI integration with personalized responses
- Contextual answers about my skills and experience
- Professional tone matching my developer persona
- Handles both technical and general inquiries

### **Contact Form**
- Real-time form validation
- EmailJS integration for reliable email delivery
- Success/error notifications
- Professional inquiry routing

## 🚀 **Deployment**

The site is deployed on Vercel with automatic deployments from the main branch.

**Live Site**: [https://portfolio-jjwlzetc1-heidis-projects-35836ea6.vercel.app](https://portfolio-jjwlzetc1-heidis-projects-35836ea6.vercel.app)

### **Deployment Steps**
1. Push changes to main branch
2. Vercel automatically builds and deploys
3. Environment variables configured in Vercel dashboard
4. Database hosted on Neon for production reliability

## 🔧 **Configuration**

### **Adding New Projects**
Projects can be added through:
- Direct database manipulation via Neon Console
- Prisma Studio interface
- SQL commands for bulk operations

### **Customizing the Chatbot**
The AI responses can be customized by modifying the system prompt in `/src/app/api/chat/route.ts`

### **Updating Contact Form**
EmailJS templates and styling can be modified in `/src/app/contact/page.tsx`

## 📝 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📞 **Contact**

**Heidi Pan**
- Email: helloalpacaa@gmail.com
- Phone: +1 346 442 5302
- Location: Atlanta, Georgia
- Portfolio: [https://portfolio-jjwlzetc1-heidis-projects-35836ea6.vercel.app](https://portfolio-jjwlzetc1-heidis-projects-35836ea6.vercel.app)
- GitHub: [@Helloalpacaa](https://github.com/Helloalpacaa)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.