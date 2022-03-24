fetch("/.netlify/functions/proxy")
  .then((res) => res.json())
  .then((data) => data.filter((result) => result.breeds.length > 0))
  .then((data) => {
    const dogs = data.map(({ breeds: [breed], url }) => {
      const container = document.createElement("div")
      container.classList.add("container")

      const title = document.createElement("h2")
      title.innerText = breed.name

      const temperament = document.createElement("p")
      temperament.innerText = breed.temperament

      const image = document.createElement("img")
      image.src = url
      image.alt = breed.name
      image.width = 200

      container.append(title, temperament, image)
      return container
    })
    document.getElementById("root").append(...dogs)
  })
