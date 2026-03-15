# 🌾 AgroSynapse: Making Tech Work for the Real Farmer

Most AgriTech today is built for farmers who have 5G, iPhones, and degrees. But what about the 80% of Indian farmers who don't? **AgroSynapse** is our attempt to bring high-end data science to a basic feature phone.

---

## 🤔 Why we built this? (About the Prototype)

We saw a huge gap: Farmers only treat crops *after* they see them dying. By then, it’s usually too late. We wanted to build something that tells the farmer **"Bhai, do din baad kida lagne wala hai, abhi dawa daal do"** (Brother, pests are coming in two days, spray now).

But there was a catch—internet sucks in villages, and not everyone can read complex charts. So, we built a prototype that:
1. **Predicts, doesn't just react:** Uses IoT sensors (soil moisture, NPK, etc.) to catch problems before they are visible.
2. **Talks like a human:** No fancy graphs. It uses Voice AI to speak to the farmer in their own language.
3. **Works without Internet:** If the web app won't load, it sends a simple SMS to any 10-rupee phone using Twilio.

---

## 🛠️ What’s under the hood?

We kept the tech stack modern but the delivery simple:
* **The Brain:** A FastAPI backend that crunches all the sensor data.
* **The Voice:** Web Speech API to turn data into "Desi" audio alerts.
* **The Safety Net:** Twilio SDK to make sure the alert reaches even a Nokia 1100.
* **The Face:** A clean React.js frontend that stays out of the way.

---

## 👥 About Us

We are just a bunch of developers who believe that technology shouldn't be a luxury. We spent our time figuring out how to translate "Nitrogen Deficiency" into something a farmer actually understands and cares about. 

Our vision is simple: **Technology should adapt to the farmer, the farmer shouldn't have to adapt to the tech.**

---

### 🛠 Quick Start for Judges
1. `cd frontend`
2. `npm install && npm run dev`
3. Check the console for the IoT simulation logs!
