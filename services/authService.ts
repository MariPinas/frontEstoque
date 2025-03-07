// services/authService.ts
import axios from "axios";

// esperar backend !!
const API_URL = "https://localhost......../api";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    // token de autenticacao
    if (response.data.token) {
      //salvar no armazenamento local
      localStorage.setItem("token", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
