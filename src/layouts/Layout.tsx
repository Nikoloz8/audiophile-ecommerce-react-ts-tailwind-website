import { Outlet } from 'react-router-dom'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import SectionThree from '../components/Home/SectionThree'

export default function Layout() {
    return (
        <div className="w-[100%] bg-[rgba(250,250,250,1)] flex-col flex items-center">
            <div className="flex flex-col items-center w-[100%] bg-transparent z-10">
                <div className="w-[1110px] flex flex-col">
                    <Header />
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
