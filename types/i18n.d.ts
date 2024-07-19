import {
  LANGUAGES as locales,
  NAMESPACES as namespaces,
} from '@/constants/i18n';

export type Locale = (typeof locales)[number];
export type Namespace = (typeof namespaces)[number];
export type Namespaces = Namespace | Namespace[];
export type TranslationOptions = { keyPrefix?: string };
