import { Logo } from "../(dashboard)/_components/logo";
const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 

        <div className="flex h-full shadow-md rounded-md">
            <div className="w-1/2 flex flex-col justify-center items-center p-10 relative">
                <img src="https://images.unsplash.com/photo-1621947081720-86970823b77a?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Company" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center bg-sky-700/20 relative">
            <div className="w-full flex justify-center items-center">
                    <div className="flex-shrink-0 mb-5">
                        <img src="stay-float.jpg" className="w-20 h-18"/>
                    </div>
                    <div className="text-center ml-4">
                        <h1 className="text-4xl font-bold mb-3">Stay-afloat</h1>
                        <p className="text-sm mb-5">Your best study platform</p>
                    </div>
                </div>
                <div className="w-auto">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default AuthLayout;