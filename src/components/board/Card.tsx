import { useMemo } from "react";
import { assigneeOptions } from "../../constants";
import { Edit2, Trash2 } from "lucide-react";
import { deleteTask, setCurrentTask, setModalOpen } from "../../stores/dashboard-action";

const Card = ({ provided, snapshot, task, colId }: any) => {

  const onEdit = () =>{
    setModalOpen(true)
    setCurrentTask({...task, column: colId})
  }
  const assigneeTag = useMemo(() => {
    const obj = assigneeOptions.find((item) => item.id === task.assignee);
    return (
      <span
        className={`bg-${obj?.color}-100 text-${obj?.color}-700 px-2 py-0.5 rounded-full font-medium`}
      >
        {obj?.name}
      </span>
    );
  }, [task]);

  return (
    <div
      className={`group relative mb-3 p-4 rounded bg-white shadow transition-colors ${
        snapshot.isDragging ? "bg-blue-50" : ""
      }`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {/* Hover-only icons */}
      <div className="absolute top-2 right-2 hidden group-hover:flex gap-2 text-gray-400 hover:text-gray-600">
        <button onClick={() => onEdit()}>
          <Edit2 size={16} />
        </button>
        <button onClick={() => deleteTask(task.id, colId)}>
          <Trash2 size={16} />
        </button>
      </div>

      <div className="flex mt-5 gap-3 items-start">
        {/* Avatar */}
        <img
          src={task.image || "https://via.placeholder.com/40"}
          alt="Avatar"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />

        {/* Title & Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-1">{task.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{task.content}</p>

          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-gray-500">
            {assigneeTag}
            <span className="flex">{task.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
