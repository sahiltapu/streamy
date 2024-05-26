import BackButton from "@/components/BackButton";
import LOGO from "@/components/logo/logo";

const AuthLayout = ({ children }) => {

    return (
        <>
            <BackButton />
            <div className="h-fit flex flex-col items-center justify-center">
                <LOGO
                    width={80}
                    height={80}
                    src="/images/streamy-logo-img.png" />
                {children}
            </div>
        </>
    )
}

export default AuthLayout;
