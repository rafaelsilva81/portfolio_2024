import { atomWithStorage } from "jotai/utils";

export type HighlightColors =
  | "#DC2626"
  | "#F97316"
  | "#16A34A"
  | "#0284C7"
  | "#6366f1"
  | "#a855f7";

export const highlightColors: HighlightColors[] = [
  "#DC2626",
  "#F97316",
  "#16A34A",
  "#0284C7",
  "#6366f1",
  "#a855f7",
];

export const highlightColorAtom = atomWithStorage<HighlightColors>(
  "highlightColorAtom",
  "#DC2626"
);
