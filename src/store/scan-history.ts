import { create } from 'zustand';

export type ScanHistoryItem = {
  id: string;
  title: string;
  originalText: string;
  translatedText: string;
  highlightedIngredients: string[];
  imageUri?: string;
  createdAt: string;
};

type ScanHistoryState = {
  scans: ScanHistoryItem[];
  addScan: (item: ScanHistoryItem) => void;
  clear: () => void;
};

export const useScanHistory = create<ScanHistoryState>((set) => ({
  scans: [],
  addScan: (item) =>
    set((state) => ({
      scans: [item, ...state.scans].slice(0, 25),
    })),
  clear: () => set({ scans: [] }),
}));
