'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@store/ui/components/select';
import Image from 'next/image';
import { useChangeLocale, useCurrentLocale } from '~/locales/client';

const LANGUAGES = [
  {
    name: 'Русский',
    code: 'ru',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/ru.svg',
  },
  {
    name: 'English',
    code: 'en',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/us.svg',
  },
];

export function LanguageSwitcher() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <Select defaultValue={locale} onValueChange={changeLocale}>
      <SelectTrigger id="area">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <Image
              src={language.image}
              alt={language.name}
              width={18}
              height={18}
              className="rounded"
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
