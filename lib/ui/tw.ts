import { twMerge } from "tailwind-merge";

export function tw(...inputs: Parameters<typeof twMerge>) {
  return twMerge(...inputs);
}
