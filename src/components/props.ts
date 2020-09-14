export interface TextProps {
    text: string
    fontSize?: string
    color?: string
    borderRadius?: string
    backgroundColor?: string
    verticalAlign: string
    horizontalAlign: string 
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
    onClick: (params: any) => void
}