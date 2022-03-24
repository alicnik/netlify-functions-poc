import fetch from "node-fetch"

exports.handler = async function () {
  const data = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=10",
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  ).then((res) => res.json())

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
