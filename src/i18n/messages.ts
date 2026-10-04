import type { Locale } from "./config";
import type { Messages } from "./translate";
import ru from "./messages/ru.json";
import uz from "./messages/uz.json";

export const messages: Record<Locale, Messages> = { en: {}, ru, uz };
