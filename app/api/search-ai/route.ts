import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Use AI to generate search results based on the prompt
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      prompt: `Based on this boarding house search query: "${prompt}", generate a JSON array of 6-8 boarding house recommendations. Each should have: id (number), name (string), location (string), price (number), rating (number 4-5), facilities (array of strings). Return ONLY valid JSON, no markdown.`,
    })

    // Parse the AI response
    const results = JSON.parse(text)

    return Response.json({
      results: results,
      query: prompt,
    })
  } catch (error) {
    console.error("AI search error:", error)
    return Response.json({ error: "Failed to process search" }, { status: 500 })
  }
}
