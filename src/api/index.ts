
const URL = 'https://front-test.beta.aviasales.ru/'

export const getSearchId = async () => {
  const response = await fetch(`${URL}search`)
  return await response.json()
}

let arrayTickets:any = []

const getTick = async (id:string) => {
  if (!id) {console.log('нет id'); return}
  const response = await fetch(`${URL}tickets?searchId=${id}`)
  if (response.status !== 200) {
    console.log(response.statusText)
    if (response.status === 404) return
    await getTick(id)
  } else {
    const data = await response.json()
    arrayTickets.push(data.tickets)
    if (data.stop !== true) {
      await getTickets(id)
    } else return
  }
}

export const getTickets = async (id:string) => {
  await getTick(id)
  return arrayTickets.flat(1)
}























// export const getTickets = (id:string) => {
//   fetch(`${URL}tickets?searchId=${id}`)
//   .then( response => {
//     if (response.status !== 200) {
//       console.log(response.statusText)
//       getTickets(id)
//     } else {
//       return response.json()
//     }
//   })
//   .then( data => {
//     arrayTickets.push(data.tickets)
//     if (data.stop !== true) {
//       getTickets(id)
//     } else {
//       {console.log(arrayTickets.flat(1)); return arrayTickets.flat(1)}
//     }
//   })
// }