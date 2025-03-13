const AuthLayout = ({children } : any) => {

    return (
        <div>
            <nav className="bg-yellow-500 text-white">
                This is Auth Navbar
            </nav>
            {children}
        </div>
    );

}

export default AuthLayout;