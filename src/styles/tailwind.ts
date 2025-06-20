
export default function tailwind() {
    const H1 = "text-[5.6rem] font-[700] leading-[56px] tracking-[2px] text-[rgba(0,0,0,1)]"
    const H2 = "text-[4rem] font-[700] leading-[44px] tracking-[1.43px] text-[rgba(0,0,0,1)]"
    const H3 = "text-[3.2rem] font-[700] leading-[36px] tracking-[1.14px] text-[rgba(0,0,0,1)]"
    const H4 = "text-[2.8rem] font-[700] leading-[100%] tracking-[2px] text-[rgba(0,0,0,1)]"
    const H5 = "text-[2.4rem] font-[700] leading-[100%] tracking-[1.71px] text-[rgba(0,0,0,1)]"
    const H6 = "text-[1.8rem] font-[700] leading-[100%] tracking-[1.29px] text-[rgba(0,0,0,1)]"
    const Overline = "text-[1.4rem] font-[400] leading-[100%] tracking-[10px] text-[rgba(216,125,74,1)]"
    const SubTitle = "text-[1.3rem] font-[700] leading-[25px] tracking-[0.93px] text-[rgba(216,125,74,1)]"
    const P = "text-[1.5rem] font-[400] leading-[25px] tracking-[0] text-[rgba(0,0,0,1)]"
    const ButtonStyle = `p-[11.5px_30px] cursor-pointer ${SubTitle} text-[rgba(255,255,255,1)] bg-[rgba(216,125,74,1)] hover:bg-[rgba(251,175,133,1)]`
    const labelStyle = "text-[1.2rem]  flex justify-between font-[700] leading-[100%] tracking-[-0.21] text-[rgba(0,0,0,1)]"
    const inputStyle = "border-[1px] border-solid border-[rgba(207,207,207,1)] rounded-[8px] text-[1.4rem] font-[700] leading-[100%] tracking-[-0.25px] text-[rgba(0,0,0,1)] p-[18px_24px] outline-none w-[100%]"

    return { H1, H2, H3, H4, H5, H6, Overline, SubTitle, P, ButtonStyle, labelStyle, inputStyle }
}
