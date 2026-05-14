import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Us",
        "portfolio": "Portfolio",
        "gallery": "Gallery",
        "contact": "Contact Us"
      },
      "hero": {
        "title": "Empowering Global Trade with Integrity",
        "subtitle": "Riyan Exim - Your Trusted Partner in International Export and Import Solutions.",
        "cta": "Explore Portfolio"
      },
      "about": {
        "title": "Who We Are",
        "description": "Riyan Exim is a leading international trading house dedicated to bridging the gap between quality manufacturers and global markets."
      },
      "contact": {
        "title": "Get In Touch",
        "address": "Our Location",
        "send": "Send Message"
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "home": "होम",
        "about": "हमारे बारे में",
        "portfolio": "पोर्टफोलियो",
        "gallery": "गैलरी",
        "contact": "संपर्क करें"
      },
      "hero": {
        "title": "ईमानदारी के साथ वैश्विक व्यापार को सशक्त बनाना",
        "subtitle": "रियान एक्जिम - अंतर्राष्ट्रीय निर्यात और आयात समाधानों में आपका विश्वसनीय साथी।",
        "cta": "पोर्टफोलियो देखें"
      },
      "about": {
        "title": "हम कौन हैं",
        "description": "रियान एक्जिम एक अग्रणी अंतरराष्ट्रीय ट्रेडिंग हाउस है जो गुणवत्तापूर्ण निर्माताओं और वैश्विक बाजारों के बीच की दूरी को पाटने के लिए समर्पित है।"
      },
      "contact": {
        "title": "संपर्क करें",
        "address": "हमारा स्थान",
        "send": "संदेश भेजें"
      }
    }
  },
  gu: {
    translation: {
      "nav": {
        "home": "હોમ",
        "about": "અમારા વિશે",
        "portfolio": "પોર્ટફોલિયો",
        "gallery": "ગેલેરી",
        "contact": "સંપર્ક કરો"
      },
      "hero": {
        "title": "પ્રામાણિકતા સાથે વૈશ્વિક વ્યાપારને સશક્ત બનાવવો",
        "subtitle": "રિયાન એક્ઝિમ - આંતરરાષ્ટ્રીય નિકાસ અને આયાત ઉકેલોમાં તમારા વિશ્વસનીય ભાગીદાર.",
        "cta": "પોર્ટફોલિયો જુઓ"
      },
      "about": {
        "title": "અમે કોણ છીએ",
        "description": "રિયાન એક્ઝિમ એક અગ્રણી આંતરરાષ્ટ્રીય ટ્રેડિંગ હાઉસ છે જે ગુણવત્તાયુક્ત ઉત્પાદકો અને વૈશ્વિક બજારો વચ્ચેના અંતરને દૂર કરવા માટે સમર્પિત છે."
      },
      "contact": {
        "title": "સંપર્ક કરો",
        "address": "અમારું સ્થાન",
        "send": "સંદેશ મોકલો"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
