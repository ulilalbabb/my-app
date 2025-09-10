type ButtonProps = {
    children: React.ReactNode,
    variant: string
    onClick?: () => void
    type?: string
}

const Button = ({children, variant, onClick}: ButtonProps) => {
    return (
        <button 
            className={`cursor-pointer ${variant}`}
            onClick={onClick}
            type="button"
            >
                {children}
        </button>
    )
}

export default Button