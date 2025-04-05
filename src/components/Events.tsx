import { useEffect, useState } from "react";
import { createEvent, fetchEvents } from "../stores/event-action";
import { useGetEvents } from "../stores/events-store";
import { isAdmin } from "../utils/helper";

const Events = () => {
  const { loading, events } = useGetEvents();
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(()=>{
    fetchEvents();
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createEvent(form);
    setForm({ name: "", description: "" });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6 sm:p-8">
          {isAdmin() &&   
          <><h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create Event
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Event Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Birthday Bash"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="It's a surprise party..."
                value={form.description}
                onChange={handleChange}
                required
                rows={3}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Event
            </button>
          </form>
          </>}
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Lists
          </h1>
          {loading && 'loading...'}

          {events.length > 0 && (
            <div className="pt-4 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Event List</h2>
              {events.map((event: any, index: any) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <h3 className="font-bold text-gray-800 dark:text-white">{event.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
