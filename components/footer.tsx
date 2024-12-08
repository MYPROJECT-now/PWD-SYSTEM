export const Footer = () => {
    return (
        <footer className="bg-dash py-1">
            <div className="container mx-auto px-4">
                <p className="text-center text-white"> 
                    &copy; {new Date().getFullYear()} PWD Management System of Parian. All rights reserved.
                </p>
            </div>
        </footer>    
    )
}