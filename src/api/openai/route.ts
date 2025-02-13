"use server"
export async function POST(req: Request) {
    const { prompt } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY; 
  
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key não encontrada" }), { status: 500 });
    }
  
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4", 
          messages: [{ role: "user", content: prompt }],
          max_tokens: 100,
          temperature: 0.7,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data);
      return new Response(JSON.stringify({ response: data.choices[0].message.content.trim() }), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
  }
  