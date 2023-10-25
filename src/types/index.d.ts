import { PRIORITY_TASK } from '../constants'

export type ErrorOptions = {
    name: string,
    message: string
}

type PriorityTask = PRIORITY_TASK.LOW | PRIORITY_TASK.MEDIUM | PRIORITY_TASK.HIGH

export type Task = {
    id: string,
    title: string,
    description: string,
    creationDate: number,
    expirationDate: number,
    priority: PriorityTask,

}