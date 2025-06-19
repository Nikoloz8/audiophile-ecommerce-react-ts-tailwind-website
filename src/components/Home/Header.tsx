import HeaderPart from "./HeaderPart"

export default function Header() {
    return (
        <header className="flex w-[100%] bg-transparent items-center p-[32px_0] justify-between border-b-[1px] border-solid border-[rgba(255,255,255,0.2)]">
            <HeaderPart />
            <img src="/images/shared/desktop/icon-cart.svg" alt="" />
        </header>)
}
