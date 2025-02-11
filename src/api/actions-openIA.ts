export async function getOpenIaAPI(prompt: string) {
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4", 
                prompt: prompt,
                max_tokens: 100, 
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        return data.choices[0].text.trim();
    } catch (error) {
        console.error("Erro ao buscar resposta da OpenAI:", error);
        return "Erro ao obter resposta da IA.";
    }
}
