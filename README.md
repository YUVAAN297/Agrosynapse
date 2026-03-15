# 🌾 AgroSynapse: Zero-Barrier Predictive Crop Health Companion

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

> **Moving Indian Agriculture from Reactive Guesswork to Predictive Data Science.**

---

## 🚀 About the Prototype

Current AgriTech solutions abandon rural Indian farmers by demanding 4G internet, expensive smartphones, and formal literacy. **AgroSynapse** is an offline-first, AI-driven crop health companion built to shatter these barriers. 

Instead of waiting for visible crop damage to apply expensive treatments, our prototype ingests real-time IoT telemetry to mathematically forecast biological threats *before* they occur. We democratize enterprise-level agricultural data science, making it accessible to the most vulnerable communities.

### ✨ Key Features of the Prototype

* 📡 **Predictive IoT Engine:** Simulates real-time sensor data (NPK levels, deep-soil moisture, acoustic pest signatures) to proactively identify crop threats.
* 🗣️ **Voice-First UI (Cognitive Inclusion):** Bypasses the literacy barrier entirely. Using the native Web Speech API, it translates complex scientific metrics into intuitive, regional-language audio alerts (e.g., "Mitti mein nami kam hai").
* 📵 **Unbreakable Offline Fallback:** Designed for the digital divide. When internet or smartphone access fails, the system automatically triggers Twilio-powered SMS alerts directly to basic feature phones.

---

## 💻 Technology Stack

* **Frontend:** React.js, Vite, Tailwind CSS
* **Voice AI:** Web Speech API (for native multilingual Text-to-Speech)
* **Backend:** FastAPI (Python), Pydantic (Schema validation), Uvicorn
* **IoT Simulator:** Python-based real-time telemetry generation
* **Offline Pipeline:** Twilio SDK for automated SMS routing

---

## ⚙️ How to Run Locally (For Judges)

### 1. Frontend Setup
```bash
# Clone the repository
git clone [https://github.com/YUVAAN297/Agrosynapse.git](https://github.com/YUVAAN297/Agrosynapse.git)

# Navigate to the frontend directory
cd Agrosynapse

👥 About Us & Our Vision
We are a team of passionate developers participating in the IBM Hackathon with a single, clear vision: Zero-Barrier Technology. We observed that the farmers who desperately need predictive data science are the ones completely locked out of it due to hardware dependencies and language constraints. AgroSynapse is our answer to this systemic exclusion. We believe that technology should adapt to the farmer, not the other way around. By fusing real-time IoT tracking, semantic AI voice translation, and offline cellular delivery, we aim to eradicate agricultural debt, reduce psychological stress, and uplift rural livelihoods.
# Install dependencies
npm install

# Start the Vite development server
npm run dev
