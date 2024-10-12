// stores/useAuthStore.ts
import { create } from "zustand";
import { account } from "@/services/appwrite.config";

interface AuthState {
	user: any | null;
	isLoading: boolean;
	error: string | null;
	register: (email: string, password: string, name: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	// getUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	isLoading: false,
	error: null,

	register: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			await account.create("unique()", email, password, name);
			await account.createEmailPasswordSession(email, password);
			const user = await account.get();
			set({ user, isLoading: false });
			localStorage.setItem("user", JSON.stringify(user));
		} catch (error: any) {
			set({ error: error.message, isLoading: false });
		}
	},

	login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			// await account.deleteSession("current");
			await account.createEmailPasswordSession(email, password);
			const user = await account.get();
			set({ user: user, isLoading: false });
			localStorage.setItem("user", JSON.stringify(user));
		} catch (error: any) {
			set({ error: error.message, isLoading: false });
			console.log(error);
		}
	},

	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await account.deleteSession("current");
			set({ user: null, isLoading: false });
			localStorage.removeItem("user");
		} catch (error: any) {
			set({ error: error.message, isLoading: false });
		}
	},
}));
