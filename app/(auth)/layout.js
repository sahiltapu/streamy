import LOGO from "@/components/logo/logo";

const AuthLayout = ({ children }) => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center py-9">
            <LOGO
                width={80}
                height={80} 
                src="/images/streamy-logo-img.png"/>
            {children}
        </div>
    )
}

export default AuthLayout;
