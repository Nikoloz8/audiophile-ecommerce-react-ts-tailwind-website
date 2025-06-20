import tailwind from "../../styles/tailwind"
import type { THeader } from "../../types"

export default function CartAndIndicator({ showCart, setShowCart, cart }: THeader) {

    const { P } = tailwind()

    return (
        <div className="flex">
            <img onClick={() => setShowCart!(!showCart)} src="/images/shared/desktop/icon-cart.svg" className="cursor-pointer" alt="" />
            {cart?.length ? <div className={`bg-[rgba(216,125,74,1)]! rounded-[100%] w-[20px] h-[20px] flex items-center justify-center ${cart.length < 0 ? "hidden" : ""} text-[#FFFFFF]! relative top-[-10px] left-[-5px] ${P}`}>{cart?.length}</div> : undefined}
        </div>)
}
