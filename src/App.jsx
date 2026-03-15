import React, { useState, useEffect, useRef } from 'react';

// --- FARMER-FRIENDLY TRANSLATION DICTIONARY ---
const translations = {
  en: {
    getCall: "Get Free Call Now", 
    title: "AGROSYNAPSE – Total Crop Protection",
    subtitle: "Listen to your soil. Catch pests and diseases before they ruin your crop.",
    checkFields: "Check My Farm",
    aboutBtn: "Listen to how it helps",
    aboutAudio: "AgroSynapse is a smart machine for your farm. You just put it in the soil, and it works day and night to keep your crops safe. It checks the water level so you know exactly when to turn on the motor, saving water and electricity. It also listens to the soil to catch pests early, checks if your soil is becoming salty or sour, and warns you about diseases before the bugs ruin the harvest. It is your 24-hour farming assistant.",
    expertHelp: "Or talk to a farming expert 📞", 
    clickToOpen: "Tap to see full farm details",
    backToHome: "← Go Back",
    dashboard: "Dashboard",
    connectSensor: "Add New Machine",
    farmAreas: "My Fields",
    weather: "Weather Forecast",
    market: "Market Prices",
    schemes: "Govt Schemes",
    settings: "Settings",
    localFarmer: "Farmer 👋",
    farmOwner: "Owner",
    helloFarmer: "Hello Farmer 👋",
    searchField: "🔍 Find Field...",
    totalAreas: "Total Fields",
    liveMonitoring: "↑ Machine Active",
    healthyAreas: "Safe Fields",
    safe: "Safe",
    needsAttention: "In Danger",
    alerts: "Warnings", 
    allFarmAreas: "Field Condition",
    liveSoilData: "Live Soil Status",
    sortBy: "Show First: Danger Fields",
    areaName: "Field Name",
    sensorBox: "Machine No.",
    currentState: "Current Status",
    village: "Village",
    aiDiagnosis: "Field Status",
    status: "Status",
    fieldArea: "Field",
    box: "Machine",
    water: "Moisture",
    temp: "Live Temperature",
    ph: "Soil pH",
    salinity: "Salt (EC)",
    npk: "Soil Strength",
    acoustic: "Acoustic (Bugs)",
    valGood: "Good",
    valNormal: "Normal",
    valHigh: "High!",
    valLow: "Low!",
    valSour: "Sour!",
    valActive: "Active!",
    bengaluruRural: "Bengaluru Rural",
    listen: "🔊 Tap to hear field status", 
    clear: "ALL FINE",
    danger: "DANGER!",
    marquee1: "Save Your Crop",
    marquee2: "24/7 Crop Care",
    marquee3: "Increase Yield",
    marquee4: "Soil Doctor",
    badge1: "24/7 Farm Protection",
    title1: "Stop crop diseases before they even start.",
    sub1: "Put our machine in your soil. We will text you exactly when your crops need water or medicine.",
    title2: "Save Water & Electricity",
    text2: "Stop guessing when to water your crops. Our machine checks deep soil moisture and tells you the exact time to run your motor.",
    title3: "Instant Bug Warnings", 
    text3: "The moment bugs attack your crop, our machine will send an instant SMS to your phone. Spray medicine exactly where it is needed.",
    title4: "Soil Health Monitoring",
    text4: "Is your soil becoming too salty or sour? Our machine tracks the health of the earth and tells you exactly what fertilizer or lime to use to keep the land fertile.",
    leaveNumber: "Enter your mobile number. Our team will call you to explain how this machine works in your field.",
    whatsYourNumber: "Enter your mobile number *",
    typeAnswer: "Type number here...",
    ok: "OK",
    requestReceived: "Request Received!",
    callText1: "🇬🇧 We will call you shortly.",
    callText2: "🇮🇳 हम आपको जल्द ही कॉल करेंगे.",
    callText3: "🇮🇳 ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮಗೆ ಕರೆ ಮಾಡುತ್ತೇವೆ.",
    footer: "Copyright AgroSynapse 2026. All rights reserved.",
    offlineMode: "⚡ Offline Mode - Showing Last Saved Data",
    weatherTitle: "Live Weather & Forecast",
    marketTitle: "Live Local Market Prices",
    schemesTitle: "Govt Schemes For You",
    addMachineTitle: "Request New Sensor",
    addMachineDesc: "Request a new machine for your farm? We will contact you directly.",
    cancel: "Cancel",
    submit: "Confirm Request",
    close: "Close",
    pricePerQuintal: "Price per Quintal",
    listenPage: "🔊 Listen to Page Summary",
    weatherSpeech: "The current temperature is {temp} degrees with a wind speed of {wind} kilometers per hour. The forecast for the coming days shows a high of {high} degrees. Please plan your farming activities accordingly.",
    enterPhoneTitle: "Enter Mobile Number",
    enterPhoneDesc: "Please enter your mobile number to access the dashboard and receive live SMS alerts from your fields.",
    machineConfirm: "Request a new machine? We will contact you at"
  },
  hi: {
    getCall: "अभी मुफ़्त कॉल पाएं", 
    title: "एग्रोसिनैप्स – फसल की पूरी सुरक्षा",
    subtitle: "मिट्टी की आवाज़ सुनें। फसल बर्बाद होने से पहले बीमारी और कीड़ों को रोकें।",
    checkFields: "मेरा खेत देखें",
    aboutBtn: "मशीन के फायदे सुनकर जानें", 
    aboutAudio: "एग्रोसिनैप्स आपके खेत के लिए एक समझदार मशीन है। आप इसे बस मिट्टी में लगा दें, और यह दिन-रात आपकी फसल की रखवाली करेगी। यह पानी की नमी चेक करती है जिससे आपको पता चलता है कि मोटर कब चलानी है, और आपकी बिजली और पानी बचता है। यह मिट्टी में कीड़ों का भी पता लगा लेती है, ताकि फसल खराब होने से पहले ही आप सही जगह पर दवा छिड़क सकें। यह आपके खेत का चौबीस घंटे का साथी है।",
    expertHelp: "या खेती के डॉक्टर से बात करें 📞", 
    clickToOpen: "खेत की पूरी जानकारी के लिए यहाँ दबाएं",
    backToHome: "← पीछे जाएं",
    dashboard: "डैशबोर्ड",
    connectSensor: "नई मशीन जोड़ें",
    farmAreas: "मेरे खेत",
    weather: "मौसम का पूर्वानुमान",
    market: "बाजार भाव",
    schemes: "सरकारी योजनाएं",
    settings: "सेटिंग्स",
    localFarmer: "किसान 👋",
    farmOwner: "मालिक",
    helloFarmer: "नमस्ते किसान 👋", 
    searchField: "🔍 खेत ढूँढें...",
    totalAreas: "कुल खेत",
    liveMonitoring: "↑ मशीन चालू है",
    healthyAreas: "बढ़िया खेत",
    safe: "सुरक्षित",
    needsAttention: "खतरा है",
    alerts: "ज़रूरी सूचना", 
    allFarmAreas: "खेतों का हाल",
    liveSoilData: "मिट्टी की ताज़ा रिपोर्ट",
    sortBy: "सबसे पहले: खतरे वाले खेत",
    areaName: "खेत का नाम",
    sensorBox: "मशीन नंबर",
    currentState: "अभी का हाल",
    village: "गाँव",
    aiDiagnosis: "खेत का हाल",
    status: "स्थिति",
    fieldArea: "खेत",
    box: "मशीन",
    water: "नमी",
    temp: "लाइव तापमान",
    ph: "पीएच (खट्टापन)",
    salinity: "खारापन (नमक)",
    npk: "मिट्टी की ताकत",
    acoustic: "आवाज़ (कीड़े)",
    valGood: "सही",
    valNormal: "नॉर्मल",
    valHigh: "ज़्यादा!",
    valLow: "कम!",
    valSour: "खट्टा!",
    valActive: "सक्रिय!",
    bengaluruRural: "बेंगलुरु ग्रामीण",
    listen: "🔊 खेत का हाल सुनें", 
    clear: "सब ठीक है",
    danger: "खतरा!",
    marquee1: "फसल बचाएं",
    marquee2: "दिन-रात खेत की रखवाली",
    marquee3: "पैदावार बढ़ाएं",
    marquee4: "मिट्टी का डॉक्टर",
    badge1: "24 घंटे खेत की रखवाली",
    title1: "बीमारी लगने से पहले ही फसल को बचाएं।",
    sub1: "बस हमारी मशीन मिट्टी में गाड़ दें। जब भी खेत को पानी या दवा चाहिए होगी, हम आपके फोन पर बता देंगे।",
    title2: "पानी और बिजली बचाएं",
    text2: "अब अंदाज़े से पानी देना बंद करें। हमारी मशीन मिट्टी के अंदर तक की नमी नापती है और मोटर चलाने का सही समय बताती है।",
    title3: "कीड़ा लगने की तुरंत सूचना", 
    text3: "फसल में कीड़ा लगते ही हमारी मशीन आपको तुरंत फोन पर मैसेज भेजेगी। इससे आप सही समय पर सही जगह दवा छिड़क सकेंगे।",
    title4: "मिट्टी की सेहत की जाँच",
    text4: "क्या आपकी मिट्टी खारी या खट्टी हो रही है? हमारी मशीन मिट्टी की ताकत को नापती है और बताती है कि खेत को उपजाऊ रखने के लिए कौन सी खाद डालनी चाहिए।",
    leaveNumber: "अपना मोबाइल नंबर डालें। हमारी टीम आपको फोन करके बताएगी कि यह मशीन आपके खेत में कैसे काम करेगी।",
    whatsYourNumber: "अपना मोबाइल नंबर यहाँ लिखें *",
    typeAnswer: "नंबर लिखें...",
    ok: "ठीक है",
    requestReceived: "अनुरोध प्राप्त हुआ!",
    callText1: "🇬🇧 We will call you shortly.",
    callText2: "🇮🇳 हम आपको जल्द ही कॉल करेंगे।",
    callText3: "🇮🇳 ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮಗೆ ಕರೆ ಮಾಡುತ್ತೇವೆ.",
    footer: "कॉपीराइट एग्रोसिनैप्स 2026। सर्वाधिकार सुरक्षित।",
    offlineMode: "⚡ ऑफ़लाइन मोड - अंतिम सहेजा गया डेटा दिखा रहा है",
    weatherTitle: "लाइव मौसम और पूर्वानुमान",
    marketTitle: "स्थानीय बाजार भाव",
    schemesTitle: "आपके लिए सरकारी योजनाएं",
    addMachineTitle: "नई मशीन का अनुरोध करें",
    addMachineDesc: "अपने खेत के लिए नई मशीन चाहिए? हम आपसे सीधे संपर्क करेंगे।",
    cancel: "रद्द करें",
    submit: "पुष्टि करें",
    close: "बंद करें",
    pricePerQuintal: "प्रति क्विंटल भाव",
    listenPage: "🔊 इस पेज की जानकारी सुनें",
    weatherSpeech: "वर्तमान तापमान {temp} डिग्री है और हवा की गति {wind} किलोमीटर प्रति घंटा है। अगले कुछ दिनों के लिए अधिकतम तापमान {high} डिग्री के आसपास रहेगा। कृपया तदनुसार अपनी खेती की योजना बनाएं।",
    enterPhoneTitle: "मोबाइल नंबर दर्ज करें",
    enterPhoneDesc: "डैशबोर्ड देखने और खेतों से लाइव एसएमएस अलर्ट प्राप्त करने के लिए कृपया अपना मोबाइल नंबर दर्ज करें।",
    machineConfirm: "नई मशीन का अनुरोध करें? हम इस नंबर पर संपर्क करेंगे:"
  },
  kn: {
    getCall: "ಈಗಲೇ ಉಚಿತ ಕರೆ ಪಡೆಯಿರಿ", 
    title: "ಅಗ್ರೋಸಿನಾಪ್ಸ್ - ಬೆಳೆ ಸಮಸ್ಯೆಗಳನ್ನು ಪ್ರಾರಂಭವಾಗುವ ಮುನ್ನವೇ ತಡೆಯಿರಿ",
    subtitle: "ಮಣ್ಣಿನ ಧ್ವನಿ ಆಲಿಸಿ. ಬೆಳೆ ಹಾಳಾಗುವ ಮುನ್ನ ರೋಗಗಳನ್ನು ತಡೆಯಿರಿ.",
    checkFields: "ನನ್ನ ಹೊಲ ನೋಡಿ",
    aboutBtn: "ಮಷಿನ್‌ನ ಉಪಯೋಗಗಳನ್ನು ಕೇಳಿ", 
    aboutAudio: "ಅಗ್ರೋಸಿನಾಪ್ಸ್ ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಒಂದು ಬುದ್ಧಿವಂತ ಮಷಿನ್. ಇದನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಇಟ್ಟರೆ ಸಾಕು, ಹಗಲು ರಾತ್ರಿ ನಿಮ್ಮ ಬೆಳೆಯ ರಕ್ಷಣೆ ಮಾಡುತ್ತದೆ. ಇದು ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ನೋಡುತ್ತದೆ, ಇದರಿಂದ ಮೋಟಾರ್ ಯಾವಾಗ ಆನ್ ಮಾಡಬೇಕು ಎಂದು ನಿಮಗೆ ತಿಳಿಯುತ್ತದೆ, ಮತ್ತು ನೀರು ವಿದ್ಯುತ್ ಉಳಿಯುತ್ತದೆ. ಕೀಟಗಳ ದಾಳಿಯನ್ನು ಮೊದಲೇ ಪತ್ತೆ ಮಾಡುತ್ತದೆ, ಇದರಿಂದ ಬೆಳೆ ಹಾಳಾಗುವ ಮುನ್ನವೇ ಔಷಧಿ ಸಿಂಪಡಿಸಬಹುದು. ಇದು ನಿಮ್ಮ 24 ಗಂಟೆಗಳ ಕೃಷಿ ಸಹಾಯಕಿ.",
    expertHelp: "ಅಥವಾ ಕೃಷಿ ಡಾಕ್ಟರ್ ಜೊತೆ ಮಾತನಾಡಿ 📞", 
    clickToOpen: "ಹೊಲದ ಪೂರ್ಣ ಮಾಹಿತಿ ನೋಡಲು ಒತ್ತಿರಿ",
    backToHome: "← ಹಿಂದೆ ಹೋಗಿ",
    dashboard: "ಡ್ಯಾಶ್ಬೋರ್ಡ್",
    connectSensor: "ಹೊಸ ಮಷಿನ್ ಸೇರಿಸಿ",
    farmAreas: "ನನ್ನ ಹೊಲಗಳು",
    weather: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
    market: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    localFarmer: "ರೈತ 👋",
    farmOwner: "ಮಾಲೀಕ",
    helloFarmer: "ನಮಸ್ಕಾರ ರೈತರೆ 👋",
    searchField: "🔍 ಹೊಲ ಹುಡುಕಿ...",
    totalAreas: "ಒಟ್ಟು ಹೊಲಗಳು",
    liveMonitoring: "↑ ಮಷಿನ್ ಸಕ್ರಿಯವಾಗಿದೆ",
    healthyAreas: "ಸುರಕ್ಷಿತ ಹೊಲಗಳು",
    safe: "ಸುರಕ್ಷಿತ",
    needsAttention: "ಅಪಾಯದಲ್ಲಿದೆ",
    alerts: "ಮುಖ್ಯ ಮಾಹಿತಿ", 
    allFarmAreas: "ನಿಮ್ಮ ಹೊಲಗಳ ಸ್ಥಿತಿ",
    liveSoilData: "ಮಣ್ಣಿನ ತಾಜಾ ಮಾಹಿತಿ",
    sortBy: "ಮೊದಲು ತೋರಿಸು: ಅಪಾಯದ ಹೊಲಗಳು",
    areaName: "ಹೊಲದ ಹೆಸರು",
    sensorBox: "ಮಷಿನ್ ನಂಬರ್",
    currentState: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
    village: "ಗ್ರಾಮ",
    aiDiagnosis: "ಹೊಲದ ಸ್ಥಿತಿ",
    status: "ಸ್ಥಿತಿ",
    fieldArea: "ಹೊಲ",
    box: "ಮಷಿನ್",
    water: "ತೇವಾಂಶ",
    temp: "ಪ್ರಸ್ತುತ ತಾಪಮಾನ",
    ph: "ರಸಸಾರ (pH)",
    salinity: "ಉಪ್ಪಿನಂಶ",
    npk: "ಮಣ್ಣಿನ ಶಕ್ತಿ",
    acoustic: "ಧ್ವನಿ (ಕೀಟಗಳು)",
    valGood: "ಉತ್ತಮ",
    valNormal: "ಸಾಮಾನ್ಯ",
    valHigh: "ಹೆಚ್ಚು!",
    valLow: "ಕಡಿಮೆ!",
    valSour: "ಹುಳಿ!",
    valActive: "ಸಕ್ರಿಯ!",
    bengaluruRural: "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
    listen: "🔊 ಹೊಲದ ಸ್ಥಿತಿ ಕೇಳಲು ಒತ್ತಿರಿ", 
    clear: "ಎಲ್ಲಾ ಸರಿ ಇದೆ",
    danger: "ಅಪಾಯ!",
    marquee1: "ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸಿ",
    marquee2: "ಹಗಲು ರಾತ್ರಿ ಜಮೀನಿನ ನಿಗಾ",
    marquee3: "ನಿಮ್ಮ ಫಸಲನ್ನು ರಕ್ಷಿಸಿ",
    marquee4: "ಮಣ್ಣಿನ ಕಾಳಜಿ",
    badge1: "24 ಗಂಟೆ ಕೃಷಿ ರಕ್ಷಣೆ",
    title1: "ಬೆಳೆ ರೋಗಗಳನ್ನು ನೀವು ನೋಡುವ ಮೊದಲೇ ನಿಲ್ಲಿಸಿ.",
    sub1: "ನಮ್ಮ ಮಷಿನ್ ಅನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಇಡಿ. ನಿಮ್ಮ ಬೆಳೆಗೆ ನೀರು ಅಥವಾ ಔಷಧಿ ಬೇಕಾದಾಗ ನಾವು ನಿಮ್ಮ ಫೋನ್‌ಗೆ ತಿಳಿಸುತ್ತೇವೆ.",
    title2: "ನೀರು ಮತ್ತು ವಿದ್ಯುತ್ ಉಳಿಸಿ",
    text2: "ಅಂದಾಜಿನ ಮೇಲೆ ನೀರು ಹರಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ. ನಮ್ಮ ಮಷಿನ್ ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಮೋಟಾರ್ ಆನ್ ಮಾಡಲು ನಿಖರವಾದ ಸಮಯವನ್ನು ಹೇಳುತ್ತದೆ.",
    title3: "ತಕ್ಷಣದ ಕೀಟ ಮಾಹಿತಿ", 
    text3: "ಕೀಟಗಳ ದಾಳಿಯಾದ ತಕ್ಷಣ ನಮ್ಮ ಮಷಿನ್ ನಿಮ್ಮ ಫೋನ್‌ಗೆ SMS ಕಳುಹಿಸುತ್ತದೆ. ಇದರಿಂದ ಸರಿಯಾದ ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಜಾಗದಲ್ಲಿ ಔಷಧಿ ಸಿಂಪಡಿಸಬಹುದು.",
    title4: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ತಪಾಸಣೆ",
    text4: "ನಿಮ್ಮ ಮಣ್ಣು ಸವಳು ಅಥವಾ ಆಮ್ಲೀಯವಾಗುತ್ತಿದೆಯೇ? ನಮ್ಮ ಮಷಿನ್ ಮಣ್ಣಿನ ಆರೋಗ್ಯವನ್ನು ಗಮನಿಸುತ್ತದೆ ಮತ್ತು ಭೂಮಿಯನ್ನು ಫಲವತ್ತಾಗಿಡಲು ಯಾವ ಗೊಬ್ಬರ ಬಳಸಬೇಕೆಂದು ತಿಳಿಸುತ್ತದೆ.",
    leaveNumber: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಹಾಕಿ. ನಮ್ಮ ತಂಡ ನಿಮಗೆ ಕರೆ ಮಾಡಿ ಈ ಮಷಿನ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ.",
    whatsYourNumber: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಬರೆಯಿರಿ *",
    typeAnswer: "ಸಂಖ್ಯೆ ಬರೆಯಿರಿ...",
    ok: "ಸರಿ",
    requestReceived: "ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!",
    callText1: "🇬🇧 We will call you shortly.",
    callText2: "🇮🇳 हम आपको जल्द ही कॉल करेंगे।",
    callText3: "🇮🇳 ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮಗೆ ಕರೆ ಮಾಡುತ್ತೇವೆ.",
    footer: "ಕೃತಿಸ್ವಾಮ್ಯ ಅಗ್ರೋಸಿನಾಪ್ಸ್ 2026. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    offlineMode: "⚡ ಆಫ್‌ಲೈನ್ ಮೋಡ್ - ಉಳಿಸಿದ ಡೇಟಾವನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ",
    weatherTitle: "ಲೈವ್ ಹವಾಮಾನ ಮತ್ತು ಮುನ್ಸೂಚನೆ",
    marketTitle: "ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    schemesTitle: "ನಿಮಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    addMachineTitle: "ಹೊಸ ಯಂತ್ರವನ್ನು ವಿನಂತಿಸಿ",
    addMachineDesc: "ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಹೊಸ ಯಂತ್ರ ಬೇಕೇ? ನಾವು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    cancel: "ರದ್ದುಮಾಡಿ",
    submit: "ಖಚಿತಪಡಿಸಿ",
    close: "ಮುಚ್ಚಿ",
    pricePerQuintal: "ಕ್ವಿಂಟಾಲ್ ಬೆಲೆ",
    listenPage: "🔊 ಈ ಪುಟದ ಮಾಹಿತಿಯನ್ನು ಕೇಳಿ",
    weatherSpeech: "ಪ್ರಸ್ತುತ ತಾಪಮಾನ {temp} ಡಿಗ್ರಿ ಮತ್ತು ಗಾಳಿಯ ವೇಗ ಗಂಟೆಗೆ {wind} ಕಿಲೋಮೀಟರ್. ಮುಂದಿನ ಕೆಲವು ದಿನಗಳಲ್ಲಿ ಗರಿಷ್ಠ ತಾಪಮಾನ {high} ಡಿಗ್ರಿ ಇರುತ್ತದೆ. ದಯವಿಟ್ಟು ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ನಿಮ್ಮ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಯೋಜಿಸಿ.",
    enterPhoneTitle: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
    enterPhoneDesc: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ವೀಕ್ಷಿಸಲು ಮತ್ತು ಲೈವ್ ಎಸ್‌ಎಂಎಸ್ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
    machineConfirm: "ಹೊಸ ಯಂತ್ರವನ್ನು ವಿನಂತಿಸಬೇಕೆ? ನಾವು ಈ ಸಂಖ್ಯೆಗೆ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ:"
  }
};

const farmImages = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
];

export default function App() {
  const [lang, setLang] = useState('en');
  const [modalState, setModalState] = useState('visible'); 
  
  const [nodes, setNodes] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Dashboard & Phone Logic
  const [isAppExpanded, setIsAppExpanded] = useState(false);
  const [globalPhone, setGlobalPhone] = useState('');
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [tempPhoneInput, setTempPhoneInput] = useState('');

  const [activeTab, setActiveTab] = useState('farmAreas'); 
  
  // AI Dynamic Data States
  const [weatherData, setWeatherData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [schemesData, setSchemesData] = useState(null);
  
  const [showAddMachineModal, setShowAddMachineModal] = useState(false);
  const [machineRequested, setMachineRequested] = useState(false);

  const t = translations[lang];
  const [locationName, setLocationName] = useState(t.bengaluruRural);

  const dashRef = useRef(null);
  const tooltipRef = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  useEffect(() => {
    if (modalState !== 'hidden' || isAppExpanded || showAddMachineModal || showPhonePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalState, isAppExpanded, showAddMachineModal, showPhonePopup]);

  useEffect(() => {
    setMarketData(null);
    setSchemesData(null);
  }, [lang, locationName]);

  // WEATHER FETCH
  useEffect(() => {
    if (activeTab === 'weather' && !weatherData) {
      const fetchW = (lat, lon) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FKolkata`)
          .then(res => res.json())
          .then(data => {
            if (data && data.daily) setWeatherData(data);
            else throw new Error();
          })
          .catch(() => {
            setWeatherData({
              current_weather: { temperature: 28.5, windspeed: 12.4 },
              daily: { time: ["2026-03-13", "2026-03-14", "2026-03-15", "2026-03-16"], temperature_2m_max: [31, 32, 30, 31], temperature_2m_min: [20, 21, 20, 19] }
            });
          });
      };
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => fetchW(pos.coords.latitude, pos.coords.longitude),
          () => fetchW(12.9716, 77.5946) 
        );
      } else {
        fetchW(12.9716, 77.5946);
      }
    }
  }, [activeTab, weatherData]);

  // AI MARKET FETCH
  useEffect(() => {
    if (activeTab === 'market' && !marketData) {
      fetch('http://localhost:8000/api/market', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: locationName, lang: lang })
      })
      .then(res => res.json())
      .then(data => setMarketData(data))
      .catch(() => setMarketData("error"));
    }
  }, [activeTab, marketData, locationName, lang]);

  // AI SCHEMES FETCH
  useEffect(() => {
    if (activeTab === 'schemes' && !schemesData) {
      fetch('http://localhost:8000/api/schemes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: locationName, lang: lang })
      })
      .then(res => res.json())
      .then(data => setSchemesData(data))
      .catch(() => setSchemesData("error"));
    }
  }, [activeTab, schemesData, locationName, lang]);

  useEffect(() => {
    if (modalState !== 'hidden') return;
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    if (!isAppExpanded && window.scrollY === 0) window.scrollTo(0, 0);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          await fetch('http://localhost:8000/api/location', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ latitude: lat, longitude: lon })
          });
        } catch (e) {}

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
          const data = await res.json();
          if(data && data.address) {
             const exactPlace = data.address.village || data.address.county || data.address.state_district || data.address.city;
             if (exactPlace) setLocationName(exactPlace);
          }
        } catch (e) {}
      });
    }

    const fetchNodes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/nodes');
        const data = await response.json();
        setNodes(data);
        localStorage.setItem('agro_offline_data', JSON.stringify(data)); 
      } catch (error) {
        if (!navigator.onLine || isOffline) {
           const cached = localStorage.getItem('agro_offline_data');
           if (cached) setNodes(JSON.parse(cached));
        }
      }
    };
    
    fetchNodes();
    const interval = setInterval(fetchNodes, 2000);
    const maxScrollDist = 350; 

    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        let progress = Math.min(window.scrollY / maxScrollDist, 1);
        if (progress < 0) progress = 0;
        const rotateX = 25 - (progress * 25);     
        const scale = 0.88 + (progress * 0.12);    

        if (dashRef.current) {
          dashRef.current.style.transform = `translateY(0px) rotateX(${rotateX}deg) scale(${scale})`;
        }

        if (tooltipRef.current) {
          if (progress > 0.95) {
            tooltipRef.current.style.opacity = '1';
            tooltipRef.current.style.pointerEvents = 'auto';
            tooltipRef.current.style.transform = 'translateY(0px) scale(1)';
          } else {
            tooltipRef.current.style.opacity = '0';
            tooltipRef.current.style.pointerEvents = 'none';
            tooltipRef.current.style.transform = 'translateY(15px) scale(0.95)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (dashRef.current && !isAppExpanded) dashRef.current.style.transform = `translateY(0px) rotateX(25deg) scale(0.88)`;

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modalState, isAppExpanded, isOffline]);

  const selectLanguage = (l) => {
    setLang(l);
    setModalState('fading'); 
    setTimeout(() => {
      setModalState('hidden'); 
    }, 500); 
    if (globalPhone) {
        fetch('http://localhost:8000/api/register_phone', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone: globalPhone, lang: l })
        }).catch(()=>{});
    }
  };

  // --- TTS LOGIC FIX ---
  const speakText = (textMsg) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(textMsg);
    let targetLang = 'en-IN';
    if (lang === 'hi') targetLang = 'hi-IN';
    else if (lang === 'kn') targetLang = 'kn-IN';
    utterance.lang = targetLang;

    const voices = window.speechSynthesis.getVoices();
    const nativeVoice = voices.find(v => v.lang === targetLang || v.lang.replace('_', '-').startsWith(targetLang.split('-')[0]));
    if (nativeVoice) utterance.voice = nativeVoice;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false); 
    window.speechSynthesis.speak(utterance);
  };

  const handleWeatherSpeak = () => {
    if(!weatherData || weatherData === 'error') return;
    let text = t.weatherSpeech
      .replace('{temp}', weatherData.current_weather.temperature)
      .replace('{wind}', weatherData.current_weather.windspeed)
      .replace('{high}', weatherData.daily.temperature_2m_max[0]);
    speakText(text);
  };

  const speakAboutProject = () => speakText(t.aboutAudio);

  const handleDashboardEntry = () => {
    if (!globalPhone) {
      setShowPhonePopup(true);
    } else {
      setIsAppExpanded(true);
    }
  };

  const handlePhonePopupSubmit = async () => {
    if (tempPhoneInput.trim().length >= 10) {
      setGlobalPhone(tempPhoneInput);
      try {
        await fetch('http://localhost:8000/api/register_phone', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone: tempPhoneInput, lang: lang })
        });
      } catch (error) {}
      setShowPhonePopup(false);
      setIsAppExpanded(true);
    }
  };

  const handleFormSubmit = async (e) => {
    if (e.key && e.key !== 'Enter') return;
    if (phoneNumber.trim().length >= 10) {
      setGlobalPhone(phoneNumber);
      setIsFormSubmitted(true);
      try {
        await fetch('http://localhost:8000/api/register_phone', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone: phoneNumber, lang: lang })
        });
        await fetch('http://localhost:8000/api/booking/sms', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone_number: phoneNumber, type: "inquiry", lang: lang })
        });
      } catch (error) {}
    }
  };

  const handleMachineRequest = async () => {
    setMachineRequested(true);
    try {
      await fetch('http://localhost:8000/api/booking/sms', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone_number: globalPhone, type: "machine", lang: lang })
      });
    } catch (error) {}
  };

  const safeCount = nodes.filter(n => n.status === 'healthy').length;
  const dangerCount = nodes.filter(n => n.status !== 'healthy').length;

  if (modalState !== 'hidden') {
    return (
      <div className={`fixed inset-0 z-[200] bg-[#000000] text-white flex items-center justify-center font-sans overflow-hidden transition-opacity duration-500 ease-in-out ${modalState === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
          @keyframes stardrift { 0% { transform: translateY(0); } 100% { transform: translateY(-800px); } }
          .bg-organic-stars { position: absolute; inset: -100%; background-image: radial-gradient(1.5px 1.5px at 15% 25%, rgba(255, 255, 255, 0.9), transparent), radial-gradient(2px 2px at 35% 65%, rgba(255, 255, 255, 0.5), transparent); background-size: 350px 350px; opacity: 0.7; animation: stardrift 90s linear infinite; }
        `}</style>
        <div className="absolute inset-0 z-0 pointer-events-none"><div className="bg-organic-stars"></div></div>
        <div className="relative z-10 bg-[#121214]/90 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl flex flex-col items-center gap-8 shadow-[0_0_100px_rgba(107,33,168,0.4)] max-w-md w-full fade-in-up mx-4">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Select Language</h2>
            <p className="text-[#a1a1aa] text-lg font-medium">अपनी भाषा चुनें / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</p>
          </div>
          <div className="flex flex-col w-full gap-4 mt-4">
            <button onClick={() => selectLanguage('en')} className="w-full bg-[#18181b] hover:bg-[#6b21a8] text-white border border-white/10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-[0_0_25px_rgba(107,33,168,0.6)]">English</button>
            <button onClick={() => selectLanguage('hi')} className="w-full bg-[#18181b] hover:bg-[#6b21a8] text-white border border-white/10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-[0_0_25px_rgba(107,33,168,0.6)]">हिंदी (Hindi)</button>
            <button onClick={() => selectLanguage('kn')} className="w-full bg-[#18181b] hover:bg-[#6b21a8] text-white border border-white/10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-[0_0_25px_rgba(107,33,168,0.6)]">ಕನ್ನಡ (Kannada)</button>
          </div>
        </div>
      </div>
    );
  }

  if (showPhonePopup) {
    return (
      <div className="fixed inset-0 z-[400] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up">
        <div className="bg-[#18181b] border border-white/10 p-8 rounded-3xl max-w-md w-full text-center shadow-[0_0_100px_rgba(107,33,168,0.3)]">
          <div className="text-5xl mb-4">📱</div>
          <h3 className="text-2xl font-bold mb-3 text-white">{t.enterPhoneTitle}</h3>
          <p className="text-[#a1a1aa] mb-8 leading-relaxed">{t.enterPhoneDesc}</p>
          <input 
            type="tel" 
            placeholder={t.typeAnswer} 
            value={tempPhoneInput} 
            onChange={e => setTempPhoneInput(e.target.value.replace(/[^0-9]/g, ''))} 
            className="w-full bg-black border border-white/20 focus:border-purple-500 rounded-xl px-5 py-4 text-white mb-6 tracking-widest text-lg outline-none transition-colors text-center" 
          />
          <button onClick={handlePhonePopupSubmit} className="w-full bg-[#6b21a8] hover:bg-[#581c87] text-white px-4 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-purple-500/30 text-lg">{t.ok} <span className="font-normal">✓</span></button>
        </div>
      </div>
    );
  }

  const renderDashboardContent = () => (
    <div className="flex w-full h-full bg-[#0d0d0f] rounded-2xl overflow-hidden shadow-[0_-20px_80px_rgba(107,33,168,0.25)] border border-white/10 relative">
      
      <div className="w-[240px] bg-[#0a0a0c] border-r border-white/5 flex flex-col hidden md:flex shrink-0 z-20">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
            <span className="text-blue-500 text-xl">🌊</span> AgroSynapse
          </div>
        </div>
        
        <div className="flex flex-col gap-2 p-4 text-sm text-[#a1a1aa] font-medium mt-2">
          {isAppExpanded && (
            <div onClick={(e) => { e.stopPropagation(); setIsAppExpanded(false); }} className="px-4 py-3 hover:bg-white/5 rounded-xl cursor-pointer flex items-center gap-3 text-white mb-4 border border-white/10 transition-colors shadow-lg">
              {t.backToHome}
            </div>
          )}
          
          <div onClick={() => setActiveTab('farmAreas')} className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between items-center transition-colors ${activeTab === 'farmAreas' ? 'bg-[#6b21a8] text-white shadow-lg' : 'hover:bg-white/5'}`}><span className="flex items-center gap-3">🌿 {t.farmAreas}</span>{activeTab === 'farmAreas' && <span className="text-xs font-bold">›</span>}</div>
          <div onClick={() => setActiveTab('weather')} className={`px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3 transition-colors ${activeTab === 'weather' ? 'bg-[#6b21a8] text-white shadow-lg' : 'hover:bg-white/5'}`}>⛅ {t.weather}</div>
          <div onClick={() => setActiveTab('market')} className={`px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3 transition-colors ${activeTab === 'market' ? 'bg-[#6b21a8] text-white shadow-lg' : 'hover:bg-white/5'}`}>📊 {t.market}</div>
          <div onClick={() => setActiveTab('schemes')} className={`px-4 py-3 rounded-xl cursor-pointer flex items-center gap-3 transition-colors ${activeTab === 'schemes' ? 'bg-[#6b21a8] text-white shadow-lg' : 'hover:bg-white/5'}`}>📜 {t.schemes}</div>
          
          <div className="w-full h-px bg-white/5 my-2"></div>
          <div onClick={() => setShowAddMachineModal(true)} className="px-4 py-3 hover:bg-white/5 rounded-xl cursor-pointer flex items-center gap-3 text-emerald-400 font-bold border border-emerald-500/20">➕ {t.connectSensor}</div>
        </div>
        
        <div className="mt-auto p-4 flex items-center gap-3 text-sm border-t border-white/5 bg-black/20">
          <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white text-sm font-bold shadow-lg">LF</div>
          <div>
            <div className="text-white font-bold">{t.localFarmer}</div>
            <div className="text-xs text-[#a1a1aa]">{t.farmOwner}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#121214] overflow-y-auto relative h-full hide-scroll">
        
        {isOffline && (
          <div className="w-full bg-rose-600/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 text-center sticky top-0 z-50 backdrop-blur-md">
            {t.offlineMode}
          </div>
        )}

        {/* WEATHER TAB */}
        {activeTab === 'weather' && (
          <div className="p-8 max-w-[1000px] mx-auto fade-in-up">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">{t.weatherTitle}</h2>
            </div>

            <button onClick={handleWeatherSpeak} className={`w-full md:w-auto px-6 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg mb-8 border border-white/10 ${isSpeaking ? 'bg-[#6b21a8] text-white border-[#6b21a8]' : 'bg-white/10 hover:bg-[#6b21a8] text-white'}`}>
               <span className="text-2xl">🔊</span> {t.listenPage}
            </button>

            {weatherData === 'error' ? (
               <p className="text-rose-400">Unable to load weather data at this time.</p>
            ) : weatherData ? (
               <div>
                 <div className="bg-[#1e3a8a]/20 border border-[#3b82f6]/20 rounded-3xl p-8 mb-8 flex items-center justify-between shadow-xl">
                    <div>
                      <p className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-2">Current Temperature</p>
                      <p className="text-7xl font-black text-white">{weatherData.current_weather.temperature}°C</p>
                      <p className="text-[#a1a1aa] mt-2 flex items-center gap-2">💨 Wind: {weatherData.current_weather.windspeed} km/h</p>
                    </div>
                    <div className="text-8xl drop-shadow-xl">⛅</div>
                 </div>
                 <div className="mb-6">
                   {(() => {
                     const days = weatherData.daily.time.slice(0,4);
                     const highs = weatherData.daily.temperature_2m_max.slice(0,4);
                     const lows = weatherData.daily.temperature_2m_min.slice(0,4);
                     const allTemps = [...highs, ...lows];
                     const minT = Math.min(...allTemps) - 2;
                     const maxT = Math.max(...allTemps) + 2;
                     const W = 600; const H = 120;
                     const xStep = W / (days.length - 1);
                     const toY = t => H - ((t - minT) / (maxT - minT)) * H;
                     const highPath = highs.map((t,i) => `${i===0?'M':'L'}${i*xStep},${toY(t)}`).join(' ');
                     const lowPath = lows.map((t,i) => `${i===0?'M':'L'}${i*xStep},${toY(t)}`).join(' ');
                     const areaPath = `${highPath} ${lows.map((t,i) => `L${(lows.length-1-i)*xStep},${toY(lows[lows.length-1-i])}`).join(' ')} Z`;
                     return (
                       <div className="bg-[#18181b] border border-white/5 rounded-2xl p-6 shadow-lg">
                         <div className="flex justify-between mb-4">
                           {days.map((date,i) => (
                             <div key={date} className="flex flex-col items-center gap-1">
                               <p className="text-[#a1a1aa] text-xs font-medium">{new Date(date).toLocaleDateString(lang, {weekday: 'short'})}</p>
                               <p className="text-white font-black text-lg">{highs[i]}°</p>
                               <p className="text-[#a1a1aa] text-xs">{lows[i]}°</p>
                             </div>
                           ))}
                         </div>
                         <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-24" preserveAspectRatio="none">
                           <defs>
                             <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
                               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                             </linearGradient>
                           </defs>
                           <path d={areaPath} fill="url(#tempGrad)"/>
                           <path d={lowPath} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d={highPath} fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                           {highs.map((t,i) => <circle key={i} cx={i*xStep} cy={toY(t)} r="4" fill="#f97316"/>)}
                           {lows.map((t,i) => <circle key={i} cx={i*xStep} cy={toY(t)} r="4" fill="#3b82f6"/>)}
                         </svg>
                         <div className="flex gap-4 mt-3">
                           <span className="flex items-center gap-1 text-xs text-[#a1a1aa]"><span className="w-3 h-[2px] bg-orange-400 inline-block rounded"></span>High</span>
                           <span className="flex items-center gap-1 text-xs text-[#a1a1aa]"><span className="w-3 h-[2px] bg-blue-400 inline-block rounded"></span>Low</span>
                         </div>
                       </div>
                     );
                   })()}
                 </div>
               </div>
            ) : <div className="flex items-center gap-3"><span className="animate-spin text-xl">⏳</span><p className="text-[#a1a1aa]">Fetching live weather data...</p></div>}
          </div>
        )}

        {/* MARKET TAB */}
        {activeTab === 'market' && (
          <div className="p-8 max-w-[1000px] mx-auto fade-in-up">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-3xl font-bold text-white">{t.marketTitle} <span className="text-sm font-normal text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded ml-2">Live AI</span></h2>
             </div>

             <button onClick={() => speakText(marketData?.voice_summary)} className={`w-full md:w-auto px-6 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg mb-8 border border-white/10 ${isSpeaking ? 'bg-[#6b21a8] text-white border-[#6b21a8]' : 'bg-white/10 hover:bg-[#6b21a8] text-white'}`}>
               <span className="text-2xl">🔊</span> {t.listenPage}
             </button>

             {marketData === 'error' ? (
                <p className="text-rose-400">Unable to load market data at this time.</p>
             ) : !marketData || !marketData.crops ? (
                <div className="flex items-center gap-3"><span className="animate-spin text-xl">⏳</span><p className="text-[#a1a1aa]">Analyzing local markets via AI...</p></div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {marketData.crops.map((item, i) => {
                    const points = [65,72,58,80,70,75,68,85,78,90,82,88].map((v,j) => Math.max(15, v + (i*7+j*3)%25 - 10));
                    const min = Math.min(...points); const max = Math.max(...points);
                    const norm = points.map(p => 100 - ((p-min)/(max-min||1))*80 - 10);
                    const w = 260; const h = 60;
                    const path = norm.map((y,j) => `${j===0?'M':'L'}${(j/(norm.length-1))*w},${(y/100)*h}`).join(' ');
                    const area = `${path} L${w},${h} L0,${h} Z`;
                    const color = item.up ? '#34d399' : '#f87171';
                    const colorFaint = item.up ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)';
                    return (
                      <div key={i} className="bg-[#18181b] border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white font-bold text-xl mb-1">{item.name}</p>
                            <p className="text-[#a1a1aa] text-sm">{t.pricePerQuintal}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-black text-white mb-1">{item.price}</p>
                            <p className={`text-sm font-bold flex items-center justify-end gap-1 ${item.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {item.up ? '▲' : '▼'} {item.trend}
                            </p>
                          </div>
                        </div>
                        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`g${i}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
                              <stop offset="100%" stopColor={color} stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          <path d={area} fill={`url(#g${i})`}/>
                          <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-[#a1a1aa] text-[10px] uppercase tracking-wider">12-week price trend</p>
                      </div>
                    );
                  })}
               </div>
             )}
          </div>
        )}

        {/* SCHEMES TAB */}
        {activeTab === 'schemes' && (
          <div className="p-8 max-w-[1000px] mx-auto fade-in-up">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-3xl font-bold text-white">{t.schemesTitle} <span className="text-sm font-normal text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded ml-2">Live AI</span></h2>
             </div>

             <button onClick={() => speakText(schemesData?.voice_summary)} className={`w-full md:w-auto px-6 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-lg mb-8 border border-white/10 ${isSpeaking ? 'bg-[#6b21a8] text-white border-[#6b21a8]' : 'bg-white/10 hover:bg-[#6b21a8] text-white'}`}>
               <span className="text-2xl">🔊</span> {t.listenPage}
             </button>

             {schemesData === 'error' ? (
                <p className="text-rose-400">Unable to load scheme data at this time.</p>
             ) : !schemesData || !schemesData.schemes ? (
                <div className="flex items-center gap-3"><span className="animate-spin text-xl">⏳</span><p className="text-[#a1a1aa]">Finding best government schemes for your area...</p></div>
             ) : (
               <div className="flex flex-col gap-5">
                  {schemesData.schemes.map((item, i) => (
                     <div key={i} className="bg-[#18181b] border border-white/5 p-6 rounded-2xl border-l-4 border-l-[#6b21a8] shadow-xl">
                        <p className="text-white font-bold text-2xl mb-3 flex items-center gap-2">🏛️ {item.name}</p>
                        <p className="text-[#a1a1aa] text-lg leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
             )}
          </div>
        )}

        {/* MAIN DASHBOARD */}
        {activeTab === 'farmAreas' && (
          <>
            <div className="sticky top-0 z-20 bg-[#121214]/90 backdrop-blur-md border-b border-white/5 p-6 md:p-8">
              <div className="max-w-[1000px] mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-white tracking-tight">{t.helloFarmer}</div>
                  <div className="bg-[#18181b] border border-white/10 px-4 py-2 rounded-xl text-sm text-[#a1a1aa] flex items-center gap-2">
                    {t.searchField}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#18181b] border border-white/5 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">🌱</div>
                    <div>
                      <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">{t.totalAreas}</div>
                      <div className="text-white font-black text-2xl flex items-center gap-2">
                        {nodes.length} <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 bg-emerald-500/10 rounded">{t.liveMonitoring}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#18181b] border border-white/5 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">✓</div>
                    <div>
                      <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">{t.healthyAreas}</div>
                      <div className="text-white font-black text-2xl">{safeCount}</div>
                    </div>
                  </div>
                  <div className="bg-[#18181b] border border-white/5 p-5 rounded-2xl flex items-center gap-4 shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl">⚠️</div>
                    <div>
                      <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">{t.needsAttention}</div>
                      <div className="text-rose-400 font-black text-2xl">{dangerCount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 max-w-[1000px] mx-auto pb-32">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl tracking-tight">{t.allFarmAreas}</h3>
                  <p className="text-sm text-[#a1a1aa] mt-1">{t.liveSoilData}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {nodes.map((node, index) => {
                  const isHealthy = node.status === 'healthy';
                  const imageSrc = farmImages[index % farmImages.length];

                  const phVal = node.ph !== undefined ? Number(node.ph).toFixed(1) : "6.5";
                  let phStatus = t.valGood;
                  if (node.ph < 6.0) phStatus = t.valSour;
                  else if (node.ph > 7.0) phStatus = t.valHigh;

                  let saltStatus = t.valNormal;
                  if (node.salt > 700) saltStatus = t.valHigh; 

                  let npkStatusText = t.valGood;
                  let isNpkDanger = false;
                  if (node.npk_status === 'danger' || node.npk === "Low!" || node.npk === "High!") {
                    npkStatusText = t.needsAttention;
                    isNpkDanger = true;
                  }

                  const isMoistureDanger = node.moisture < 40 || node.moisture > 70;
                  const isTempDanger = node.temperature > 35 || node.temperature < 10;
                  const isAcousticDanger = node.acoustic !== undefined && node.acoustic >= 20;
                  
                  const rawAiMsg = lang === 'en' ? node.msg_en : (lang === 'hi' ? node.msg_hi : node.msg_kn);
                  const msgParts = typeof rawAiMsg === 'string' && rawAiMsg.length > 5 ? rawAiMsg.split('|||') : ["⏳ Analyzing field data, please wait a moment..."];
                  const uiMsg = msgParts[0];
                  const voiceMsg = msgParts.length > 1 ? msgParts[1] : uiMsg;

                  return (
                    <div key={node.id} className="bg-[#18181b] border border-white/10 rounded-3xl overflow-hidden flex flex-col group hover:border-[#6b21a8]/50 transition-colors shadow-xl">
                      
                      <div className="h-56 relative bg-gray-800 overflow-hidden">
                        <img src={imageSrc} alt="Farm Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] to-transparent opacity-80"></div>
                        
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                          📡 {t.sensorBox} {node.id}00
                        </div>

                        <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-lg text-xs font-black tracking-widest border shadow-lg ${
                          isHealthy ? 'bg-[#064e3b]/90 text-[#34d399] border-[#34d399]/50 backdrop-blur-sm' : 'bg-[#7f1d1d]/90 text-[#f87171] border-[#f87171]/50 backdrop-blur-sm animate-pulse'
                        }`}>
                          {isHealthy ? t.clear : t.danger}
                        </div>

                        <div className="absolute bottom-4 left-5">
                          <h3 className="text-2xl font-bold text-white drop-shadow-md">{t.fieldArea} {node.id}</h3>
                          <p className="text-sm text-gray-300 drop-shadow-md flex items-center gap-1">📍 {locationName}</p>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col gap-6">
                        <div className="bg-[#0d0d0f] rounded-2xl border border-white/5 p-5 flex flex-col gap-4">
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2">
                            
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg shrink-0">💧</div>
                              <div>
                                <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider">{t.water}</p>
                                <p className={`font-bold text-sm ${isMoistureDanger ? 'text-rose-400' : 'text-white'}`}>{node.moisture !== undefined ? node.moisture : 65}%</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-lg shrink-0">🌡️</div>
                              <div>
                                <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider">{t.temp}</p>
                                <p className={`font-bold text-sm ${isTempDanger ? 'text-rose-400' : 'text-white'}`}>{node.temperature !== undefined ? node.temperature : 28.5}°C</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg shrink-0">🧪</div>
                              <div>
                                <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider">{t.ph}</p>
                                <p className={`font-bold text-sm ${phStatus === t.valSour || phStatus === t.valHigh ? 'text-rose-400' : 'text-white'}`}>{phVal} <span className="text-[10px] font-normal opacity-70">({phStatus})</span></p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 text-lg shrink-0">🧂</div>
                              <div>
                                <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider">{t.salinity}</p>
                                <p className={`font-bold text-sm ${saltStatus === t.valHigh ? 'text-rose-400' : 'text-white'}`}>{saltStatus}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 text-lg shrink-0">🌿</div>
                              <div>
                                <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider">{t.npk}</p>
                                <p className={`font-bold text-sm ${isNpkDanger ? 'text-rose-400' : 'text-white'}`}>{npkStatusText}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-lg shrink-0">🦗</div>
                              <div>
                                <p className="text-[#a1a1aa] text-[9px] uppercase tracking-wider">{t.acoustic}</p>
                                <p className={`font-bold text-sm ${isAcousticDanger ? 'text-rose-400' : 'text-white'}`}>{node.acoustic !== undefined ? node.acoustic : 10} <span className="text-[10px] font-normal opacity-70">({isAcousticDanger ? t.valActive : t.valNormal})</span></p>
                              </div>
                            </div>

                          </div>

                          <div className="border-t border-white/5 pt-4 mt-2">
                            <p className="text-violet-400 text-[10px] uppercase tracking-wider mb-2 font-bold flex items-center gap-1">✨ {t.aiDiagnosis}</p>
                            <p className={`font-medium text-sm leading-relaxed ${isHealthy ? 'text-emerald-300' : 'text-rose-300'}`}>
                              "{uiMsg}"
                            </p>
                          </div>

                        </div>

                        <button 
                          onClick={(e) => { e.stopPropagation(); speakText(voiceMsg); }}
                          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg border ${
                            isSpeaking ? 'bg-[#6b21a8] text-white border-[#6b21a8]' : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                          }`}
                        >
                          <span className="text-2xl">🔊</span> {t.listen}
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* --- ADD NEW MACHINE MODAL --- */}
      {showAddMachineModal && (
        <div className="fixed inset-0 z-[300] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-[#18181b] border border-white/10 p-8 rounded-3xl max-w-md w-full text-center shadow-[0_0_80px_rgba(16,185,129,0.2)]">
            <div className="text-5xl mb-4">📡</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{t.addMachineTitle}</h3>
            {!machineRequested ? (
              <>
                <p className="text-[#a1a1aa] mb-6 leading-relaxed">{t.machineConfirm} <br/><span className="text-white font-bold tracking-widest text-lg block mt-2">{globalPhone}</span></p>
                <div className="flex gap-4">
                  <button onClick={() => setShowAddMachineModal(false)} className="flex-1 px-4 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">{t.cancel}</button>
                  <button onClick={handleMachineRequest} className="flex-1 bg-[#10b981] hover:bg-[#059669] text-white px-4 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/30">{t.submit}</button>
                </div>
              </>
            ) : (
              <div className="py-4">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-xl font-bold text-emerald-400 mb-8">{t.requestReceived}</p>
                <button onClick={() => {setShowAddMachineModal(false); setMachineRequested(false);}} className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3.5 rounded-xl font-medium transition-colors">{t.close}</button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );

  if (isAppExpanded) {
    return (
      <div className="h-screen w-screen bg-[#000000] text-white font-sans overflow-hidden fixed inset-0 z-[100] animate-slide-up">
        {renderDashboardContent()}
      </div>
    );
  }

  return (
    <div className={`min-h-[160vh] bg-[#000000] text-white font-sans overflow-x-hidden relative selection:bg-violet-500/30 transition-opacity duration-1000 ease-in-out ${modalState === 'hidden' ? 'opacity-100' : 'opacity-0'}`}>
      
      <style>{`
        @keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: scrollMarquee 25s linear infinite; }
        .fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes stardrift { 0% { transform: translateY(0); } 100% { transform: translateY(-800px); } }
        .bg-organic-stars { position: absolute; inset: -100%; background-image: radial-gradient(1.5px 1.5px at 15% 25%, rgba(255, 255, 255, 0.9), transparent), radial-gradient(2px 2px at 35% 65%, rgba(255, 255, 255, 0.5), transparent), radial-gradient(1px 1px at 75% 45%, rgba(255, 255, 255, 0.8), transparent), radial-gradient(3px 3px at 85% 85%, rgba(255, 255, 255, 0.4), transparent), radial-gradient(1.5px 1.5px at 45% 15%, rgba(255, 255, 255, 0.7), transparent), radial-gradient(2px 2px at 95% 15%, rgba(255, 255, 255, 0.6), transparent); background-size: 350px 350px; opacity: 0.7; animation: stardrift 90s linear infinite; }
        .beam-texture { background-image: radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 5px 5px; }
        .will-change-transform { will-change: transform; transition: transform 0.1s ease-out; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
        <div className="bg-organic-stars"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden flex justify-center">
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[120vh] transform rotate-[35deg] origin-bottom-right opacity-85">
          <div className="absolute inset-y-0 right-[25%] w-[40%] bg-gradient-to-l from-[#4c1d95]/40 to-transparent blur-[40px]"></div>
          <div className="absolute inset-y-0 right-[20%] w-[1.5px] bg-white/40 blur-[1px]"></div>
          <div className="absolute inset-y-0 right-[20%] w-[12%] bg-gradient-to-l from-[#9333ea]/70 to-transparent blur-[18px]"></div>
          <div className="absolute inset-0 beam-texture opacity-30" style={{ maskImage: 'linear-gradient(to left, transparent, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(to left, transparent, black 60%, transparent)' }}></div>
        </div>

        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[120vh] transform -rotate-[35deg] origin-bottom-left opacity-85">
          <div className="absolute inset-y-0 left-[25%] w-[40%] bg-gradient-to-r from-[#4c1d95]/40 to-transparent blur-[40px]"></div>
          <div className="absolute inset-y-0 left-[20%] w-[1.5px] bg-white/40 blur-[1px]"></div>
          <div className="absolute inset-y-0 left-[20%] w-[12%] bg-gradient-to-r from-[#9333ea]/70 to-transparent blur-[18px]"></div>
          <div className="absolute inset-0 beam-texture opacity-30" style={{ maskImage: 'linear-gradient(to right, transparent, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 60%, transparent)' }}></div>
        </div>
      </div>

      <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 py-6 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center font-bold text-white border-[2.5px] border-white rounded text-lg">A</div>
          <span className="text-xl font-bold tracking-tight">AgroSynapse</span>
        </div>
        
        <button 
          onClick={() => document.getElementById('phone-panel').scrollIntoView({behavior: 'smooth', block: 'center'})}
          className="bg-[#6b21a8] hover:bg-[#581c87] text-white px-6 py-2.5 rounded-full font-medium transition-all text-sm shadow-[0_0_15px_rgba(107,33,168,0.5)]"
        >
          {t.getCall}
        </button>
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center pt-20 px-4 text-center">
        <h1 className="text-[52px] md:text-[72px] font-extrabold tracking-tighter mb-4 max-w-5xl leading-[1.05] text-white mt-[-2vh]">
          {t.title}
        </h1>
        <p className="text-[#a1a1aa] text-lg md:text-xl mb-8 font-light max-w-2xl tracking-tight">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
          <button 
            onClick={handleDashboardEntry}
            className="bg-[#f4f4f5] text-black px-8 py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
          >
            {t.checkFields} 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </button>

          <button 
            onClick={speakAboutProject}
            className="bg-[#10b981] text-white px-8 py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#059669] transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto"
          >
            <span className="text-xl">🔊</span> {t.aboutBtn}
          </button>
        </div>

        <button 
          onClick={() => document.getElementById('phone-panel').scrollIntoView({behavior: 'smooth', block: 'center'})} 
          className="mt-8 text-[#a1a1aa] hover:text-white underline underline-offset-4 text-sm transition-colors font-medium z-30"
        >
          {t.expertHelp}
        </button>
      </div>

      <div className="relative z-30 px-4 w-full max-w-[1050px] mx-auto h-[650px] mt-6" style={{ perspective: '1200px' }}>
        <div 
          ref={dashRef}
          className="group relative flex w-full h-full will-change-transform origin-top"
        >
          <div 
            ref={tooltipRef}
            onClick={() => {
              if (tooltipRef.current && tooltipRef.current.style.opacity === '1') {
                handleDashboardEntry();
              }
            }}
            className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer transition-all duration-500 ease-out opacity-0 pointer-events-none translate-y-[15px] scale-95"
          >
            <div className="bg-[#6b21a8] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(107,33,168,0.8)] flex items-center gap-2 text-lg hover:bg-[#581c87] transition-colors">
              {t.clickToOpen} 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </div>
          </div>
          
          <div className="w-full h-full pointer-events-none">
            {renderDashboardContent()}
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-[#000000] pt-16 mt-10">
        
        <div className="w-full overflow-hidden relative border-y border-white/5 bg-[#030303] py-8">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 text-3xl font-black uppercase tracking-widest whitespace-nowrap">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">{t.marquee1}</span>
                <span className="text-white/20 text-xl">✦</span>
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">{t.marquee2}</span>
                <span className="text-white/20 text-xl">✦</span>
                <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">{t.marquee3}</span>
                <span className="text-white/20 text-xl">✦</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">{t.marquee4}</span>
                <span className="text-white/20 text-xl">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto py-32">
          <div className="bg-white/5 text-[#a1a1aa] px-4 py-1.5 rounded-full text-xs font-medium mb-8 border border-white/10 tracking-wide">
            {t.badge1}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
            {t.title1}
          </h2>
          <p className="text-[#a1a1aa] text-lg md:text-xl font-light tracking-tight max-w-2xl">
            {t.sub1}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#0a0a0c] border border-white/5 rounded-3xl p-4 shadow-[0_0_50px_rgba(59,130,246,0.1)] h-[400px] relative overflow-hidden group">
               <img 
                 src="/water.jpg" 
                 alt="Watering" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
            </div>
            
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xl mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                💧
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-snug">
                {t.title2}
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed font-light">
                {t.text2}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start text-left order-2 md:order-1">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                🐛
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-snug">
                {t.title3}
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed font-light">
                {t.text3}
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-white/5 rounded-3xl p-4 shadow-[0_0_50px_rgba(16,185,129,0.1)] h-[400px] relative overflow-hidden group order-1 md:order-2">
               <img 
                 src="/pest.avif" 
                 alt="Pest Alert" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#0a0a0c] border border-white/5 rounded-3xl p-4 shadow-[0_0_50px_rgba(249,115,22,0.1)] h-[400px] relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop" 
                 alt="Soil" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
            </div>
            
            <div className="flex flex-col items-start text-left">
              <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-xl mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                🌍
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-snug">
                {t.title4}
              </h3>
              <p className="text-[#a1a1aa] text-lg leading-relaxed font-light">
                {t.text4}
              </p>
            </div>
          </div>
        </div>

        <div id="phone-panel" className="max-w-4xl mx-auto px-4 mb-20 border-t border-white/5 pt-32 pb-10">
          <div className="text-center mb-10">
             <p className="text-[#a1a1aa] text-lg font-light">
                {t.leaveNumber}
             </p>
          </div>

          <div className="relative rounded-xl overflow-hidden h-[400px] flex flex-col group border border-white/10 shadow-[0_0_50px_rgba(107,33,168,0.1)] bg-black">
             
             <img 
               src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop" 
               alt="Night Sky Background" 
               className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 z-0" 
             />
             <div className="absolute inset-0 bg-black/40 z-0"></div>
             
             <div className="relative z-10 w-full h-1.5 bg-white/20">
                <div className={`h-full bg-white transition-all duration-500 ${isFormSubmitted ? 'w-full' : 'w-1/2'}`}></div>
             </div>

             <div className="relative z-10 flex-1 flex flex-col justify-center px-10 md:px-20">
                {!isFormSubmitted ? (
                  <div className="fade-in-up w-full max-w-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-white/20 text-white text-sm font-bold w-6 h-6 flex items-center justify-center rounded shadow-sm">1</span>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{t.whatsYourNumber}</h2>
                    </div>
                    <input 
                      type="tel"
                      placeholder={t.typeAnswer}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))}
                      onKeyDown={handleFormSubmit}
                      className="w-full bg-transparent border-b-2 border-white/30 focus:border-white text-2xl text-white outline-none pb-2 mb-8 placeholder:text-white/50 transition-colors tracking-widest"
                    />
                    {phoneNumber && (
                      <button 
                        onClick={() => handleFormSubmit({ key: 'Enter' })}
                        className="bg-[#e3b8a6] text-black px-6 py-2.5 rounded shadow-lg font-bold hover:bg-white transition-colors flex items-center gap-2 fade-in-up text-lg"
                      >
                        {t.ok} <span className="font-normal text-sm">✓</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="fade-in-up text-center flex flex-col items-center justify-center w-full">
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-4xl mb-6 border border-emerald-500/30">
                      ✓
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">{t.requestReceived}</h2>
                    <div className="space-y-3 text-lg font-medium bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full max-w-md text-left">
                      <p className="text-white flex items-center gap-3"><span className="text-xl">🇬🇧</span> {t.callText1}</p>
                      <p className="text-white flex items-center gap-3"><span className="text-xl">🇮🇳</span> {t.callText2}</p>
                      <p className="text-white flex items-center gap-3"><span className="text-xl">🇮🇳</span> {t.callText3}</p>
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[#a1a1aa] text-sm border-t border-white/5 pt-8">
           <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-6 h-6 flex items-center justify-center font-bold text-white border border-white rounded text-xs">A</div>
             <span className="font-semibold text-white tracking-tight">AgroSynapse</span>
           </div>
           <div className="text-center md:text-right tracking-tight">
             {t.footer}
           </div>
        </div>

      </div>
    </div>
  );
}