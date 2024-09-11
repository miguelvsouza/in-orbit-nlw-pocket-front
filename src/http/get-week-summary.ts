import { api } from "../lib/axios"

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  > | null
}

export async function getWeekSummary(): Promise<SummaryResponse> {
  const { data } = await api.get("/week-summary")

  return data.summary
}
