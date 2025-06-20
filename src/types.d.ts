import type { FieldError, SetFieldValue, UseFormClearErrors, UseFormHandleSubmit, UseFormSetError, UseFormWatch } from "react-hook-form"

type TItem = {
    count: number,
    name: string,
    price: number,
    image: string
}

type TFunctions = Partial<{
    setCart: React.Dispatch<React.SetStateAction<TItem[]>>
    cart: TItem[]
    count: number
}>

type THeader = Partial<{
    showCart: boolean
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
    cart: TItem[]
    setCart: React.Dispatch<React.SetStateAction<TItem[]>>
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
    isFooter: boolean
}>

type TOutlet = Partial<{
    cart: TItem[]
    showSubmit: boolean,
    setShowSubmit: React.Dispatch<React.SetStateAction<boolean>>
    isTablet: boolean
    isMobile: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}>

type TForm = {
    name: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    EMoneyNumber: string;
    EMoneyPin: string;
    selected: number;
}

type TFormContext = {
    register: UseFormRegister<TForm>
    handleSubmit: ReturnType<typeof useForm>["handleSubmit"]
    clearErrors: UseFormClearErrors<TForm>
    errors: FieldErrors<TForm>
    watch: ReturnType<typeof useForm>["watch"]
    setValue: ReturnType<typeof useForm>["setValue"]
    setError: UseFormSetError<TForm>
}