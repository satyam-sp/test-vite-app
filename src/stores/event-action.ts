import { useEventStore } from "./events-store";
import api from "../lib/api";

const { setState, getState } = useEventStore;



export const fetchEvents = async () => {
    setState({ loading: true });
    try {
      const res = await api.get(`/events`);
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
      const res: any = await api.post(`/events`, data);
      if(res.status === 200){
        setState({events: [...events, res.data]})
      }
    } catch (err) {
      console.error('Create event failed', err);
    }
}