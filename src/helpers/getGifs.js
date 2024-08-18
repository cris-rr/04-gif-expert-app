export const getGifs = async (category) => {
  const apiKey = 'LbJLkfBKm5Y9134RNS9A6z2J5wXbIzI5'
  const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=${ apiKey }`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))

  return gifs
}
