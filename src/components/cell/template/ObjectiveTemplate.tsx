import React from 'react'
import Cell, { ButtonProps } from '../Cell'

interface ObjectiveTemplateProps {
    height: string
    header: string
    contents: string[]
    status: number
    buttons?: ButtonProps[]
    onClick?: () => void
}

const ObjectiveTemplate = ({ height, header, contents, status, buttons, onClick }: ObjectiveTemplateProps) => {
    return <Cell
        borderRadius="10px"
        backgroundColor="#eeeeee" 
        height={height}
        header={{ text: header, verticalAlign: "center", horizontalAlign: "center" }}
        contents={contents.map((content) => { return { text: content, borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }})}
        status={status}
        buttons={buttons}
        onClick={onClick}
    />
}

export default ObjectiveTemplate;