// src/actions/userActions.ts
import axios from "axios";
import { useUserStore } from "./user-store";
import { setUser } from "../utils/helper";
const apiUrl = import.meta.env.VITE_API_URL;

const { setState } = useUserStore;

export const signup = async (data: { email: string; password: string; role: string }, navigate: (string: any) => void) => {
  setState({ loading: true, error: null });
  try {
    const res = await axios.post(`${apiUrl}/signup`, data);
    if (res.status === 200 || res.status === 201) {
      setState({ user: res.data });
      setUser(res.data)
      navigate('/events')
    }
  } catch (err: any) {
    console.error("Signup failed", err);
    setState({ error: err.response?.data?.message || "Signup failed" });
  } finally {
    setState({ loading: false });
  }
};

export const signin = async (data: { email: string; password: string }, navigate: (string: any) => void) => {
  setState({ loading: true, error: null });
  try {
    const res = await axios.post(`${apiUrl}/signin`, data);
    if (res.status === 200) {
      setState({ user: res.data });
      setUser(res.data)
      navigate('/events')
    }
  } catch (err: any) {
    console.error("Signin failed", err);
    setState({ error: err.response?.data?.message || "Signin failed" });
  } finally {
    setState({ loading: false });
  }
};
