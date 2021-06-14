
const URL = 'https://front-test.beta.aviasales.ru'

const getSearchId = async () => {
  const response = await fetch(`${URL}/search`)
  const data = await response.json()
  console.log(data)
}

export default getSearchId