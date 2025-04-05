import axios from "axios";
import { useEventStore } from "./events-store";
import { getToken } from "../utils/helper";
const apiUrl = import.meta.env.VITE_API_URL;

const { setState, getState } = useEventStore;



export const fetchEvents = async () => {
    setState({ loading: true });
    try {
      const res = await axios.get(`${apiUrl}/events`,{
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        }});
      setState({ events: res.data });
    } catch (err) {
      console.error('Fetch events failed', err);
    } finally {
      setState({ loading: false });
    }
}


export const createEvent = async(data: any) => {
    const { events } = getState();
    try {
      const res: any = await axios.post(`${apiUrl}/events`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        }},
         data);
      if(res.status === 200){
        setState({events: [...events, res.data]})
      }
    } catch (err) {
      console.error('Create event failed', err);
    }
}