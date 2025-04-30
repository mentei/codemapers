# 🚀 CodeMapers

**Empower your coding journey with a multi-language development platform.**  
CodeMapers offers a collaborative environment supporting various programming languages, integrated with Docker for seamless development and deployment.

## 🌐 Live Demo

[https://codemapers.vercel.app](https://codemapers.vercel.app)

## 🧰 Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS
- **Authentication**: NextAuth.js with Google OAuth
- **Containerization**: Docker, Docker Compose
- **Deployment**: Vercel (Frontend), Google Cloud (Backend Services)
- **Languages Supported**: Rust, Java, C, C++, JavaScript, Go, Python
- **AI Integration**: Ollama for LLM support

## 📁 Project Structure


## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rahulpatle-sol/codemapers.git
   cd codemapers
npm install
Install dependencies:

bash
कॉपी करें
बदलें
npm install
Set up environment variables:

Create a .env file in the root directory and add your configuration:

env
कॉपी करें
बदलें
NEXTAUTH_URL=https://codemapers.vercel.app
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Run the development server:

bash
कॉपी करें
बदलें
npm run dev
Open http://localhost:3000 to view the application.

🐳 Docker Setup
Build and Run Containers
Navigate to the app directory:

bash
कॉपी करें
बदलें
cd app
Start all services:

bash
कॉपी करें
बदलें
docker-compose up --build
This will build and run containers for all supported languages and the Ollama AI service.

Accessing Services
Ollama Chat: http://localhost:11434

Other language services can be accessed as per their respective configurations.

☁️ Deployment
Frontend (Vercel)
The frontend is deployed on Vercel. Ensure that your environment variables are set in the Vercel dashboard for seamless deployment.

Backend Services (Google Cloud)
For deploying Dockerized backend services:

Build Docker images:

bash

docker build -t gcr.io/your-project-id/codemapers-app .
Push to Google Container Registry:

bash

docker push gcr.io/your-project-id/codemapers-app
Deploy to Cloud Run:


gcloud run deploy codemapers \
  --image gcr.io/your-project-id/codemapers-app \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated
Replace your-project-id with your actual Google Cloud project ID.
