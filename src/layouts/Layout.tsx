import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import SectionThree from '../components/Home/SectionThree'
import { useEffect, useState } from 'react'
import type { TItem } from '../types'

export default function Layout() {

    const [showCart, setShowCart] = useState(false)
    const [cart, setCart] = useState<TItem[]>([])
    const [showSubmit, setShowSubmit] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const body = document.querySelector("body")

    const [isTablet, setIsTablet] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    if (body && showCart && !isMobile || showSubmit && !isMobile && body || showMenu && !isMobile && body) {
        body.style.overflow = "hidden"
    } else if (body) {
        body.style.overflow = "visible"
    }

    useEffect(() => {
        setIsTablet(window.innerWidth < 1024 && window.innerWidth > 600)
        setIsMobile(window.innerWidth < 600)

        const handleResize = () => {
            setIsTablet(window.innerWidth < 1024 && window.innerWidth > 600)
            setIsMobile(window.innerWidth < 600)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const isCheckout = useLocation().pathname.includes("checkout")

    return (
        <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">            {showCart || showMenu ? <div onClick={() => {
            setShowCart(false)
            setShowMenu(false)
        }} className="fixed w-[100%] h-[100%]! min-h-[100vh] bg-[rgba(0,0,0,0.5)]! z-20 "></div> : undefined}
            <div className="flex flex-col items-center w-[100%] bg-transparent z-30">
                <div className="w-[1110px] max-xl:w-[100%]! flex flex-col">
                    <Header setShowMenu={setShowMenu} showMenu={showMenu} showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} />
                </div>
            </div>
            <Outlet context={{ cart, showSubmit, setShowSubmit, isTablet, isMobile, setShowMenu }} />
            {!isCheckout && <div className='w-[1110px] max-xl:w-[100%] max-xl:p-[0_39px] max-sm:p-[0_24px]'>
                <SectionThree isMobile={isMobile} isTablet={isTablet} />
            </div>}
            <Footer />
        </div>
    )
}
