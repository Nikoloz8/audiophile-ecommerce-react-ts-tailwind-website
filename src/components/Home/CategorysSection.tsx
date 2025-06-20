import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"

export default function CategorysSection() {

    const navCategorys = ["headphones", "speakers", "earphones"]
    const { H6, SubTitle } = tailwind()
    const navigate = useNavigate()

    return (
        <section className="flex w-[100%] justify-between max-sm:flex-col max-sm:items-center max-sm:gap-[100px]">
            {navCategorys.map((e, i) => {
                return <div key={i} onClick={() => navigate(`/category/${e}`)} className="flex bg-[rgba(241,241,241,1)] rounded-[8px] max-md:min-h-[180px]! flex-col items-center pb-[30px]! max-xl:w-[32%]! w-[350px] max-sm:w-[100%]! min-h-[220px] justify-end! relative cursor-pointer">
                    <img src={`/images/shared/desktop/image-category-thumbnail-${e}.png`} className={`absolute w-[250px] top-[-85px] max-sm:w-[170px] max-sm:top-[-55px] ${e === "earphones" ? "top-[-70px]! max-sm:top-[-45px]!" : ""}`} alt="" />
                    <div className="flex flex-col gap-[12px] items-center">
                        <h6 className={`${H6}`}>{e.toUpperCase()}</h6>
                        <a href="#" className={`flex items-center gap-[12px] ${SubTitle} text-[rgba(0,0,0,0.5)]!`}>
                            SHOP
                            <img src="/images/shared/desktop/icon-arrow-right.svg" alt="" />
                        </a>
                    </div>
                </div>
            })}
        </section>
    )
}
