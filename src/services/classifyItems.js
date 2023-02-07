import { examples } from "../data/examples";

export async function classifyItems({itemsToOrganize}) {
  const URL = 'https://api.cohere.ai/classify'

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `BEARER ${import.meta.env.VITE_API_KEY}`,
        "Content-Type": "application/json",
        "Cohere-Version": "2022-12-06"
      },
      body: `{
        "model": "large",
        "inputs": ${JSON.stringify(itemsToOrganize)},
        "examples": ${JSON.stringify(examples)}
      }`
    })

    //TODO --- ERROR HANDLING
    if(response) {
      console.log(response)
    }

    const data = await response.json()
    return data;

  } catch(e) {
    return e;
  }
}
