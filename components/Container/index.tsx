export default function Container ({children, className=""}: {children:React.ReactNode, className?: string}) {

    return (
        <div className={`container mx-auto md:px-4 px-6 w-full ${className}`}>{children}</div>
    )
}
