# 🤖 AgentForge DevOps

A proof-of-concept DevOps orchestration platform demonstrating how AI agents, RL models, and automation tools can be coordinated through a central dashboard.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Python](https://img.shields.io/badge/Python-3.11-green)

---

## 🎯 Problem Statement

Modern development teams face critical challenges:
- Time-consuming code reviews create deployment bottlenecks
- Inconsistent code quality from manual review processes
- Repetitive development tasks reduce productivity

AgentForge demonstrates an orchestration layer that coordinates multiple AI/automation tools to address these pain points.

---

## ✨ Key Components

### 🛠️ Automated Code Generation
CLI tools for rapid component and API scaffolding with built-in testing

### 🔄 AI Workflow Orchestration
Multi-step workflows that analyze repositories and make intelligent deployment decisions

### 🧠 Reinforcement Learning
ML model trained to predict code quality using GRPO algorithm

### 🚀 Cloud Deployment
Auto-deployment pipeline with edge network distribution

### 🐰 Intelligent Code Review
Automated PR analysis with best practice recommendations

---

## 🚀 Quick Start

Clone repository
git clone https://github.com/PavithraEbbali/AgentForce-DevOps.git
cd AgentForge-DevOps

Install dependencies
npm install

Run development server
npm run dev

Visit `http://localhost:3000` for the dashboard.

---

## 🛠️ Component Usage

### Generate Code
node cline-scripts/component-generator.js ComponentName
node cline-scripts/api-generator.js EndpointName

### Run Workflows
docker run -p 8081:8080 kestra/kestra:latest server local
Access at http://localhost:8081

### Train Model
python -m venv oumi-env
.\oumi-env\Scripts\activate
python oumi-training/train-model.py

---

## 📁 Project Structure

AgentForge-DevOps/
├── app/ # Next.js application
│ ├── page.tsx # Main dashboard UI
│ ├── layout.tsx # Root layout
│ └── api/ # API routes
│ ├── codeanalysis/ # Code analysis endpoint
│ └── workflowstatus/ # Workflow status endpoint
├── src/
│ └── components/ # React components
│ ├── Dashboard.tsx
│ ├── CodeQualityCard.tsx
│ └── DashboardCard.tsx
├── cline-scripts/ # CLI automation tools
│ ├── component-generator.js
│ ├── api-generator.js
│ └── test-runner.js
├── kestra-workflows/ # AI workflow definitions
│ ├── github-analyzer.yaml
│ └── code-quality-agent.yaml
├── oumi-training/ # RL model training
│ ├── train-model.py
│ └── model-output/
│ └── model_metadata.json
├── public/ # Static assets
├── .clinerules # Cline configuration
├── README.md # Documentation
└── package.json # Dependencies


---

## 🔗 Links

**Live Demo**: https://agent-force-dev-ops.vercel.app  
**GitHub**: https://github.com/PavithraEbbali/AgentForce-DevOps

---

## 👤 Author

**Pavithra Ebbali**  
Computer Science Student  
GitHub: [@PavithraEbbali](https://github.com/PavithraEbbali)

---

## 📜 License

MIT License

---

Built with: Cline, Kestra, Oumi, Vercel, CodeRabbit

