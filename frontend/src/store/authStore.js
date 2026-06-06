import { create } from "zustand";
import { registerUser, loginUser, logoutUser } from "../services/authService";
import { getMe } from "../services/authService";
const useAuthStore = create((set) => ({
  user: null,
  checkAuth: async () => {
    try {
      const user = await getMe();

      set({ user });
    } catch (error) {
      set({ user: null });
    }
  },
  register: async (formData) => {
    const data = await registerUser(formData);

    set({
      user: data.user,
    });

    return data;
  },

  login: async (formData) => {
    const data = await loginUser(formData);

    set({
      user: data.user,
    });

    return data;
  },

  logout: async () => {
    await logoutUser();

    set({
      user: null,
    });
  },
}));

export default useAuthStore;
