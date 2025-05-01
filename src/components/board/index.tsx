import {
    DragDropContext,
    Droppable,
    Draggable,
  } from '@hello-pangea/dnd';
  import { useBoardData } from '../../stores/dashboard-store';
  import { onDragEnd, setModalOpen } from '../../stores/dashboard-action';
  import Card from './Card';
import AddTask from './AddTask';
  
  const KanbanBoard: React.FC = () => {
    const columns = useBoardData();
  
    return (
      <div className="flex flex-col gap-6 bg-blue-100 text-gray-900 min-h-screen p-6">
        {/* Top-right global Add Button */}
        <div className="flex justify-end">
          <button
            className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => setModalOpen(true)}
          >
            + Add ToDo
          </button>
        </div>
        <AddTask />
  
        <div className="flex gap-6 w-full">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.entries(columns).map(([colId, column]) => (
              <div
                key={colId}
                className="bg-white rounded-md p-4 w-1/3 shadow-sm border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {column.name}
                </h2>
                <Droppable droppableId={colId}>
                  {(provided, snapshot) => (
                    <div
                      className={`p-2 rounded min-h-[200px] transition-colors ${
                        snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-gray-50'
                      }`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <Card
                              provided={provided}
                              snapshot={snapshot}
                              task={task}
                              colId={colId}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    );
  };
  
  export default KanbanBoard;
  