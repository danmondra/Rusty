import { examples } from "../data/examples";

export async function classifyItems({itemsToOrganize}) {
  try {
    const response = await fetch('https://api.cohere.ai/classify', {
      method: "POST",
      headers: {
        Authorization: "BEARER 4YPNA5VMRkSesTpJSqfBxiQVMClAObBGW07ArrG4",
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
