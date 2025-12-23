type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    variant: string
    onClick?: () => void
    type?: string
}

const Button = ({children, variant, onClick, type}: ButtonProps) => {
    return (
        <button 
            className={`cursor-pointer ${variant}`}
            onClick={onClick}
            type={type}
            >
                {children}
        </button>
    )
}

export default Button