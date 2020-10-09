export interface HandleComponentProps {
    title: TextProps
    forms?: FormProps[]
    buttons?: ButtonProps[]
}

export interface FormProps {
    type: string
    placeholder?: string
    value?: string
    rows?: string
    options?: OptionProps[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TextProps {
    text: string
    fontSize?: string
    color?: string
    borderRadius?: string
    backgroundColor?: string
    verticalAlign?: string
    horizontalAlign?: string 
}

export interface ButtonProps {
    type:     
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';
    text: string
    onClick: (params?: any) => void
}

export interface OptionProps {
    title: string
    value: string
}