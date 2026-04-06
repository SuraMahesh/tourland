import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: { tours: 'Tours', specials: 'Specials', compare: 'Compare', hotels: 'Hotels', contact: 'Contact' },
          tours: { view: 'View tour', book: 'Book' },
          specials: { book: 'Book special' },
          common: { downloadPdf: 'Download PDF brochure', whatsapp: 'WhatsApp', email: 'Email' },
          booking: { title: 'Book this tour', step: 'Step', next: 'Next', back: 'Back', submit: 'Send inquiry on WhatsApp' },
          weather: { title: 'Weather' },
        }
      },
      de: {
        translation: {
          nav: { tours: 'Touren', specials: 'Spezialangebote', compare: 'Vergleichen', hotels: 'Hotels', contact: 'Kontakt' },
          tours: { view: 'Tour ansehen', book: 'Buchen' },
          specials: { buchen: 'Spezial buchen' },
          common: { downloadPdf: 'PDF herunterladen', whatsapp: 'WhatsApp', email: 'E-Mail' },
          booking: { title: 'Diese Tour buchen', step: 'Schritt', next: 'Weiter', back: 'Zurück', submit: 'Anfrage senden' },
          weather: { title: 'Wetter' },
        }
      },
      fr: {
        translation: {
          nav: { tours: 'Circuits', specials: 'Spéciaux', compare: 'Comparer', hotels: 'Hôtels', contact: 'Contact' },
          tours: { view: 'Voir le circuit', book: 'Réserver' },
          specials: { réserver: 'Réserver spécial' },
          common: { downloadPdf: 'Télécharger PDF', whatsapp: 'WhatsApp', email: 'E-mail' },
          booking: { title: 'Réserver ce circuit', step: 'Étape', next: 'Suivant', back: 'Retour', submit: 'Envoyer la demande' },
          weather: { title: 'Météo' },
        }
      }
    },
    fallbackLng: 'en',
    detection: { order: ['queryParam', 'localStorage', 'navigator', 'htmlTag'] },
    interpolation: { escapeValue: false }
  })

export default i18n
