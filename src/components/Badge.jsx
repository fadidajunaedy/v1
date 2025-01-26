const Badge = ({ key, children }) => {
    return (
        <>
            <span key={key} className="backdrop-blur bg-secondary/50 font-semibold text-primary py-2 px-4 text-xs lg:text-sm rounded-full">
                {children}
            </span>
        </>
    )
}

export default Badge