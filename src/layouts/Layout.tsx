import { Outlet } from 'react-router-dom'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import SectionThree from '../components/Home/SectionThree'
import { useState } from 'react'

export default function Layout() {

    const [showCart, setShowCart] = useState(false)

    const body = document.querySelector("body")

    if (body && showCart) {
        body.style.overflow = "hidden"
    } else if (body) {
        body.style.overflow = "visible"
    }

    return (
        <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">            {showCart ? <div onClick={() => setShowCart(false)} className="fixed w-[100%] h-[100%]! min-h-[100vh] bg-[rgba(0,0,0,0.5)]! z-20 "></div> : undefined}
            <div className="flex flex-col items-center w-[100%] bg-transparent z-30">
                <div className="w-[1110px] flex flex-col">
                    <Header showCart={showCart} setShowCart={setShowCart} />
                </div>
            </div>
            <Outlet />
            <div className='w-[1110px]'>
                <SectionThree />
            </div>
            <Footer />
        </div>
    )
}
