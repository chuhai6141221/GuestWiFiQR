export type PaperSizeId = "4x6" | "5x7" | "a4" | "letter";

export type PaperSize = {
  id: PaperSizeId;
  label: string;
  widthIn: number;
  heightIn: number;
};

export const PAPER_SIZES: Record<PaperSizeId, PaperSize> = {
  "4x6": {
    id: "4x6",
    label: "4x6 inch",
    widthIn: 4,
    heightIn: 6
  },
  "5x7": {
    id: "5x7",
    label: "5x7 inch",
    widthIn: 5,
    heightIn: 7
  },
  a4: {
    id: "a4",
    label: "A4",
    widthIn: 8.27,
    heightIn: 11.69
  },
  letter: {
    id: "letter",
    label: "US Letter",
    widthIn: 8.5,
    heightIn: 11
  }
};

export const PAPER_SIZE_OPTIONS = Object.values(PAPER_SIZES);
