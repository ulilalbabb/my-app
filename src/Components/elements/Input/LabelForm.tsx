type LabelProps = {
    children: React.ReactNode
    htmlfor: string
}

const Label = ({children, htmlfor}: LabelProps) => {
    return (
        <label 
            htmlFor={htmlfor}
            className="text-sm">
                {children}
        </label>
    )
}

export default Label