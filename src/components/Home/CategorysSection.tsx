import tailwind from "../../styles/tailwind"

export default function CategorysSection() {

    const navCategorys = ["headphones", "speakers", "earphones"]
    const { H6, SubTitle } = tailwind()

    return (
        <section className="flex w-[100%] justify-between mb-[168px]">
            {navCategorys.map((e, i) => {
                return <div key={i} className="flex bg-[rgba(241,241,241,1)] rounded-[8px] flex-col items-center pb-[30px]! w-[350px] min-h-[220px] justify-end! relative cursor-pointer">
                    <img src={`/images/shared/desktop/image-category-thumbnail-${e}.png`} className={`absolute w-[250px] top-[-85px] ${e === "earphones" ? "top-[-70px]!" : ""}`} alt="" />
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
