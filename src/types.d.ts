
type TItem = {
    count: number,
    name: string,
    price: number,
    image: string
}

type TFunctions = Partial<{
    setCart: React.Dispatch<React.SetStateAction<TItem[]>>
    cart: TItem[]
    count: number
}>

