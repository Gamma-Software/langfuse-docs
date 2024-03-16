import { useEffect, useState } from 'react';
import { getMessages } from '@/lib/intl';

export function useLocalizedMessages(locale: string): any | null {
  const [messages, setMessages] = useState<any | null>(null);

  useEffect(() => {
    async function fetchMessages() {
      const msgs = await getMessages(locale);
      setMessages(msgs);
    }
    fetchMessages();
  }, [locale]);

  return messages;
}