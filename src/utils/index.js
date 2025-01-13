
export const getForecast = (setState, points) => {
  // console.log(points)
  const url = `https://api.weather.gov/points/${points.latitude},${points.longitude}`
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const { gridX, gridY } = data.properties

    fetch(`https://api.weather.gov/gridpoints/BOU/${gridX},${gridY}/forecast`)
    .then(res => res.json())
    .then(data => {
      setState(data.properties)
    })
  })
  .catch(err => console.log(err))
}
