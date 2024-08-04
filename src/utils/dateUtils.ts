import { formatDistanceToNow, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatDateDistance = (dateString: string): string => {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
  });
};
