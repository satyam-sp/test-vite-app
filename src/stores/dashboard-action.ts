// src/actions/userActions.ts

import { DropResult } from "@hello-pangea/dnd";
import { Task, useDashboardStore } from "./dashboard-store";
import { v4 as uuidv4 } from 'uuid';
import dayjs from "dayjs";

const { setState, getState } = useDashboardStore;


export const setColumns = (data: any) => {
    setState({ boardData: data })
}


export const onDragEnd = (result: DropResult) => {
    const { boardData } = getState()
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = boardData[source.droppableId];
    const destCol = boardData[destination.droppableId];
    const sourceTasks = [...sourceCol.tasks];
    const destTasks = [...destCol.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
        sourceTasks.splice(destination.index, 0, movedTask);
        setColumns({
            ...boardData,
            [source.droppableId]: {
                ...sourceCol,
                tasks: sourceTasks,
            },
        });
    } else {
        destTasks.splice(destination.index, 0, movedTask);
        setColumns({
            ...boardData,
            [source.droppableId]: {
                ...sourceCol,
                tasks: sourceTasks,
            },
            [destination.droppableId]: {
                ...destCol,
                tasks: destTasks,
            },
        });
    }
};

export const setModalOpen = (open: boolean) => {
    setState({ open })
}

export const setCurrentTask = (currentTask: Task) => {
    setState({ currentTask })
}

export const addTask = (args: { title: string, content: string, image: any, assignee: number }) => {
    const { title, content, assignee, image } = args;
    const { boardData } = getState();
    if (title) {
        const date = dayjs().format('YYYY-MM-DD HH:mm');
        const newTask = { id: uuidv4(), content, title, assignee, image, date };
        boardData['todo'].tasks.unshift(newTask)
        setState({
            boardData: {...boardData}
        })
     
    }
};

export const updateTask = (updatedTask: {
    title: string;
    content: string;
    assignee: number;
    image: any;
  }, id: string, colId: string) => {
    const { boardData } = getState();
  
    // Find the column containing the task
    debugger;
      const column = boardData[colId];
      const taskIndex = column.tasks.findIndex((task) => task.id === id);
      debugger;
  
      if (taskIndex !== -1) {
        const date = dayjs().format('YYYY-MM-DD HH:mm');
        column.tasks[taskIndex] = {
          ...column.tasks[taskIndex],
          ...updatedTask,
          date,
        };  
        setState({
          boardData: { ...boardData },
        });
  
      }
    
  };

  export const deleteTask = (id: string, colId: string) => {
    const { boardData } = getState();
  
    const column = boardData[colId];
    const taskIndex = column.tasks.findIndex((task) => task.id === id);
  
    if (taskIndex !== -1) {
      const confirmed = window.confirm("Are you sure you want to delete this task?");
      if (!confirmed) return;
  
      column.tasks.splice(taskIndex, 1); // remove task from array
  
      setState({
        boardData: { ...boardData },
      });
    }
  };
  