const Badge = ({ key, children }) => {
    return (
        <>
            <span key={key} className="backdrop-blur bg-secondary/30 text-primary py-2 px-4 text-xs rounded-full">
                {children}
            </span>
        </>
    )
}

export default Badge