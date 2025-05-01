import { create } from 'zustand';
import { tasks } from '../constants';

export type Task = {
    column?: any,
    id: string;
    content: string;
    image: any;
    title: string;
    date: string;
    assignee: number;
};

type Column = {
    name: string;
    tasks: Task[];
};
interface Props {
    error: null | string;
    loading: boolean;
    open: boolean;
    currentTask: null| Task;
    boardData: Record<string, Column>;
}
export const INTIAL_STATE: Props = {
    loading: false,
    error: null,
    open: false,
    currentTask: null,
    boardData: {
        todo: {
            name: 'To Do',
            tasks: tasks.todos,
        },
        inprogress: {
            name: 'In Progress',
            tasks: tasks.progress,
        },
        review: {
            name: 'In Review',
            tasks: tasks.review,
        },
        done: {
            name: 'Done',
            tasks: tasks.done,
        },
    }
}

export const useDashboardStore = create(() => ({
    ...INTIAL_STATE
}))




export const useBoardData = () => {
    return useDashboardStore((s) => s.boardData)
}


export const useModalOpen = () => {
    return useDashboardStore((s) => s.open)
}


export const useCurrentTask = () => {
    return useDashboardStore((s) => s.currentTask)
}