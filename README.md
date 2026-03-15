# 🌾 AgroSynapse: Empowering the Grassroots Farmer

AgroSynapse is a "Zero-Barrier" AI-driven prototype designed to move Indian agriculture from reactive guesswork to predictive data science. We built this to solve a simple problem: **Farmers shouldn't need a PhD or a 5G connection to save their crops.**

---

## 🛠️ The Prototype: How it Works

Since we don't have physical IoT sensors plugged into your machine, we have built a **Real-Time IoT Simulator** inside the backend. 

1. **The Simulator:** A Python logic that mimics real soil sensors, generating live telemetry data (NPK levels, deep-soil moisture, and pest acoustic signatures).
2. **The Brain (Backend):** A FastAPI server that ingests this data, processes it, and decides if the farmer needs an alert.
3. **The Voice (Frontend):** A React dashboard that uses the **Web Speech API** to talk to the farmer in their native language (e.g., Hindi) about their crop health.
4. **The Safety Net:** If the farmer is offline, the system triggers a **Twilio SMS** alert to any basic feature phone.

---

## ⚙️ Setup & Installation

To see the prototype in action, you need to run **two separate terminals** simultaneously.

### 🏁 Terminal 1: Backend & IoT Simulator
This terminal handles the "mock" sensor data generation and API logic.
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
``` 
cd frontend
npm install
npm run dev

