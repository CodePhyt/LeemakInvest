import axios from 'axios';

const LIBRE_TRANSLATE_API = 'https://libretranslate.de';

interface TranslationRequest {
  q: string;
  source: string;
  target: string;
  format: string;
}

export async function translateText(text: string, targetLang: string, sourceLang: string = 'en'): Promise<string> {
  try {
    const response = await axios.post(`${LIBRE_TRANSLATE_API}/translate`, {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text'
    } as TranslationRequest);

    return response.data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text as fallback
  }
}

export async function translateObject(obj: Record<string, any>, targetLang: string, sourceLang: string = 'en'): Promise<Record<string, any>> {
  const translatedObj: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      translatedObj[key] = await translateText(value, targetLang, sourceLang);
    } else if (typeof value === 'object' && value !== null) {
      translatedObj[key] = await translateObject(value, targetLang, sourceLang);
    } else {
      translatedObj[key] = value;
    }
  }

  return translatedObj;
}

export async function updateTranslations(translations: Record<string, any>): Promise<void> {
  try {
    // Translate to Russian
    const ruTranslations = await translateObject(translations, 'ru');
    // Translate to Turkish
    const trTranslations = await translateObject(translations, 'tr');

    // You can implement storage logic here if needed
    console.log('Translations updated successfully');
    return {
      ru: ruTranslations,
      tr: trTranslations
    };
  } catch (error) {
    console.error('Error updating translations:', error);
    throw error;
  }
}