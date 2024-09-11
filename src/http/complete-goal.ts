import { api } from "../lib/axios"

export async function completeGoal(goalId: string) {
  await api.post(
    "/complete-goal",
    {
      goalId,
    },
    { headers: { "Content-Type": "application/json" } }
  )
}
