import { twMerge, twJoin } from "tailwind-merge";

export function tw(...inputs: Parameters<typeof twJoin>) {
  return twMerge(twJoin(inputs));
}
