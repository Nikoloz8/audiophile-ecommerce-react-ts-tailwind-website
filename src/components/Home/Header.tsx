import tailwind from "../../styles/tailwind"
import HeaderPart from "./HeaderPart"

export default function Header() {

    const handleGetCart = () => {
        const cart = localStorage.getItem("cart")
        if (!cart) return
        return JSON.parse(cart)
    }

    const { H6, P } = tailwind()

    return (
        <header className="flex w-[100%] bg-transparent items-center p-[32px_0] justify-between border-b-[1px] border-solid border-[rgba(255,255,255,0.2)] relative">
            <HeaderPart />
            <img src="/images/shared/desktop/icon-cart.svg" className="cursor-pointer" alt="" />

        </header>)
}
