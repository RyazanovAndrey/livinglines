interface IProps { id: string, image: string, title: string, price: string }

export const getData = async (url: string): Promise<IProps[]> => {
    const res = await fetch(url, { cache: 'no-cache' })
    return res.json()
}

export const getDataSingle = async (id: string): Promise<IProps> => {
    const res = await fetch(`https://68dd0e537cd1948060ac38cf.mockapi.io/data/${id}`)
    return res.json()
}