
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

type THeader = {
    showCart: boolean
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
    cart: TItem[]
    setCart: React.Dispatch<React.SetStateAction<TItem[]>>
}

type TOutlet = {
    cart: TItem[]
    showSubmit: boolean,
    setShowSubmit: React.Dispatch<React.SetStateAction<boolean>>
}