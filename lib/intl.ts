export async function getMessages(locale: string): Promise<any> {
    try {
      const messages = await import(`@/lang/${locale}.json`);
      return messages.default;
    } catch (error) {
      console.error(`Error loading messages for locale ${locale}:`, error);
      return {};
    }
  }