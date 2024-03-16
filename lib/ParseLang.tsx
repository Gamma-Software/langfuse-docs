import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { getMessages } from '@/lib/intl';

export function useLocalizedMessages(): any | null {
  const [messages, setMessages] = useState<any | null>(null);

  const router = useRouter();
  const { locale } = router;
  console.log(locale);

  useEffect(() => {
    async function fetchMessages() {
      const msgs = await getMessages(locale);
      setMessages(msgs);
    }
    fetchMessages();
  }, [locale]);

  return messages;
}