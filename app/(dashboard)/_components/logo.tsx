import Image from "next/image";

export const Logo = () => {
    return (
        <Image 
            height={130}
            width={130}
            alt="logo"
            src="/logo1.svg" // placeholder for logo inside public folder
        />
    )
}