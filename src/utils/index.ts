import type { TFunctions, TItem } from "../types"

export default function index({ setCart, cart, count }: TFunctions) {

    const formatName = (name: string) => {
        const splitedName = name.split(" ")
        const formatedName = splitedName.slice(0, splitedName.length - 1).join(" ")
        return formatedName
    }

    const handleClearCart = () => {
        localStorage.setItem("cart", "[]")
        setCart!([])
    }

    const handleCountChange = (name: string, action: boolean) => {
        const updatedCart = cart!.map((item: TItem) => {
            if (item.name === name) {
                const newCount = action ? item.count + 1 : item.count - 1
                return { ...item, count: newCount > 0 ? newCount : 1 }
            }
            return item
        })

        setCart!(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    const handleGetTotal = () => {
        let count = 0
        cart!.forEach((e: TItem) => count += e.price * e.count)
        return count
    }

    const handleAddToCart = (item: TItem) => {
        const cart = localStorage.getItem("cart")
        if (!cart) return
        const parsedCart = JSON.parse(cart)

        const isInCart = (item: TItem) => {
            for (let i = 0; i < parsedCart.length; i++) {
                if (item.name === parsedCart[i].name) {
                    return true
                }
                return false
            }
        }

        if (isInCart(item)) {
            const itemInLocalstorage = parsedCart.find((e: TItem) => e.name === item.name)
            const filteredCart = parsedCart.filter((e: TItem) => e.name !== item.name)
            itemInLocalstorage.count += count
            filteredCart.push(itemInLocalstorage)
            const stringedCart = JSON.stringify(filteredCart)
            localStorage.setItem("cart", stringedCart)
        } else {
            parsedCart.push(item)
            const stringedCart = JSON.stringify(parsedCart)
            localStorage.setItem("cart", stringedCart)
        }
    }

    const getPreviousPath = () => {
        return localStorage.getItem("previousPath")

    }

    return { handleGetTotal, handleClearCart, formatName, handleCountChange, handleAddToCart, getPreviousPath }
}
