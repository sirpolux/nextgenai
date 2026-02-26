import { Toaster } from "react-hot-toast";

export default function Base({children, className=""}){
    return (
        <div className={"w-full h-screen p-0 m-0 "+className}>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration:4000,
                    style:{
                        padding:"12px 16px",
                        fontSize:"14px",
                        borderRadius:"8px"
                    },
                }}
            />
            
            {children}
        </div>
    );
}