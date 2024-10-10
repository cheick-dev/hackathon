// store/useThemeStore.ts
import { create } from "zustand";
type SelectedLevelType =
	| "Licence 1"
	| "Licence 2"
	| "Licence 3"
	| "Master 1"
	| "Master 2"
	| "Doctorat";
// type SelectedSpecialtyType = "Licence 1"|
// 		"Licence 2"|
// 		"Licence 3"|
// 		"Master 1"|
// 		"Master 2"|
// 		"Doctorat"
interface SelectedState {
	selectedLevel: SelectedLevelType;
	selectedSpecialty: string;
	activeTab: string;
	handleLevelChange: (value: SelectedLevelType) => void;
	handleSpecialtyChange: (value: string) => void;
	handleActiveTabChange: (value: string) => void;
}

export const useSelectedStore = create<SelectedState>((set) => ({
	selectedLevel: "Licence 1",
	selectedSpecialty: "Informatique",
	activeTab: "overview",

	handleLevelChange: (selectedLevel) => {
		set({ selectedLevel });
	},
	handleSpecialtyChange: (selectedSpecialty) => {
		set({ selectedSpecialty });
	},
	handleActiveTabChange: (activeTab) => {
		set({ activeTab });
	},
}));
