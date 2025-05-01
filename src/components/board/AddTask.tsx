import { useEffect, useState } from "react";
import { addTask, setModalOpen, updateTask } from "../../stores/dashboard-action";
import { useCurrentTask, useModalOpen } from "../../stores/dashboard-store";
import { assigneeOptions } from "../../constants";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const imageOptions = [
  { id: "img1", src: image1, alt: "1" },
  { id: "img2", src: image2, alt: "2" },
  { id: "img3", src: image3, alt: "3" },
];

const defaultTask = {
  title: "",
  content: "",
  assignee: 1,
  image: imageOptions[0].src,
};

const AddTask = () => {
  const currentTask = useCurrentTask();
  const open = useModalOpen();

  const [task, setTask] = useState(defaultTask);

  useEffect(() => {
    if (currentTask) {
      setTask({
        title: currentTask.title || "",
        content: currentTask.content || "",
        assignee: currentTask.assignee || 1,
        image: currentTask.image || imageOptions[0].src,
      });
    } else {
      setTask(defaultTask);
    }
  }, [currentTask]);

  const handleAdd = () => {
    if(currentTask){
        updateTask(task, currentTask.id, currentTask.column )
    }else{
        addTask(task);

    }
    setTask(defaultTask);
    setModalOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>

        <div className="space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Title"
            value={task.title}
            onChange={(e) =>
              setTask((prev) => ({ ...prev, title: e.target.value }))
            }
          />

          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Content"
            value={task.content}
            rows={3}
            onChange={(e) =>
              setTask((prev) => ({ ...prev, content: e.target.value }))
            }
          />

          <select
            value={task.assignee}
            onChange={(e) =>
              setTask((prev) => ({
                ...prev,
                assignee: parseInt(e.target.value),
              }))
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {assigneeOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <div>
            <label className="block font-medium mb-2">Choose Image:</label>
            <div className="flex gap-4">
              {imageOptions.map((img) => (
                <label key={img.id} className="cursor-pointer">
                  <input
                    type="radio"
                    name="image"
                    value={img.src}
                    checked={task.image === img.src}
                    onChange={() =>
                      setTask((prev) => ({ ...prev, image: img.src }))
                    }
                    className="hidden"
                  />
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-16 h-16 rounded border-2 ${
                      task.image === img.src
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleAdd}
              disabled={!task.title.trim()}
            >
              {currentTask ? 'Update': 'Add'} Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
