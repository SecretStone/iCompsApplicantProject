import {TasksConstants} from "../../features/Tasks/TaskConstants";

const getNextTasksRoute = (routeForCurrentTask: string): string | null => {
    const currentIdx = TasksConstants.Tasks.findIndex((x: string) => x === routeForCurrentTask);

    const nextIndex = currentIdx + 1;

    if(nextIndex >= TasksConstants.Tasks.length) return null;

    return TasksConstants.Tasks[nextIndex];
}

const getPreviousTasksRoute = (routeForCurrentTask: string): string | null => {
    const currentIdx = TasksConstants.Tasks.findIndex((x: string) => x === routeForCurrentTask);

    const nextIndex = currentIdx - 1;

    if(nextIndex < 0) return null;

    return TasksConstants.Tasks[nextIndex];
}

export const TasksUtil = {
    getPreviousTasksRoute,
    getNextTasksRoute,
};
