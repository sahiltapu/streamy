import LOGO from "./_components/logo";

const AuthLayout = ({ children }) => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center py-9">
            <LOGO />
            {children}
        </div>
    )
}

export default AuthLayout;
