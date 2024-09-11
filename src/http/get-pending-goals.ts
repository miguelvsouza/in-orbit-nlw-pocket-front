import { api } from "../lib/axios"

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const { data } = await api.get("/pending-goals")

  return data.pendingGoals
}
