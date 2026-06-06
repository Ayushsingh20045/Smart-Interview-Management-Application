import { create } from "zustand";
import { registerUser, loginUser, logoutUser } from "../services/authService";
import { getMe } from "../services/authService";
const useAuthStore = create((set) => ({
  user: null,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const user = await getMe();

      set({ user, isCheckingAuth: false });
    } catch (error) {
      set({ user: null, isCheckingAuth: false });
      console.log(error)
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
