type HeaderProps = {
    title: string
}

export function Header({ title }: HeaderProps) {
    return (
        <div className="flex justify-center">
            <h1>{title}</h1>
        </div>
    )
}