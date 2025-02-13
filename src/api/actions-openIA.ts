"use client";
export async function getOpenIaAPI(prompt: string) {
    try {
        const response = await fetch("/api/openai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data.response);
        return data.response; // Retorna apenas o texto da resposta
    } catch (error) {
        console.error("Erro ao buscar resposta da OpenAI:", error);
        return "Erro ao obter resposta da IA.";
    }
}
