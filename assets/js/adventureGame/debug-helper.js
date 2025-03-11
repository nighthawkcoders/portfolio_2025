function checkImageExists(imageSrc) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ exists: true, src: imageSrc })
    img.onerror = () => resolve({ exists: false, src: imageSrc })
    img.src = imageSrc
  })
}

async function checkGameImages(path) {
  const images = [
    "/images/gamify/space.png",
    "/images/gamify/ufo.png",
    "/images/gamify/meteor.png",
    "/images/gamify/laser_bolt.png",
  ]

  console.log("Checking image paths with base path:", path)

  for (const img of images) {
    const fullPath = path + img
    const result = await checkImageExists(fullPath)
    console.log(`Image ${result.src}: ${result.exists ? "EXISTS" : "NOT FOUND"}`)
  }
}

export { checkGameImages }
