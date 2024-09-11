import { api } from "../lib/axios"

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  const {} = await api.post(
    "/goals",
    {
      title,
      desiredWeeklyFrequency,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
