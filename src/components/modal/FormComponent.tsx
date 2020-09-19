import React from 'react'
import Form from 'react-bootstrap/Form'

interface OptionProps {
    value: string
    title: string
}

interface FormGroupComponentProps {
    type: "TEXT" | "LABEL" | "TEXTAREA" | "SELECT"
    id?: string
    value?: string
    placeholder?: string
    selected?: string
    options?: OptionProps[]
    rows?: string
    onChange?: () => void
}

export interface FormComponentProps {
    forms: FormGroupComponentProps[]
}

const FormComponent = ({ forms }: FormComponentProps) => {
    let view = <Form>
    {forms.map((form) => {
        if(form.type === "TEXT") {
            return <Form.Group>
                <Form.Control 
                    id={form.id} 
                    placeholder={form.placeholder}
                    onChange={form.onChange}
                />
            </Form.Group>
        }

        if(form.type === "LABEL") {
            return <Form.Group>
                <Form.Label>{form.value}</Form.Label>
            </Form.Group>
        }

        if(form.type === "TEXTAREA") {
            return <Form.Group>
                <Form.Control 
                    id={form.id}
                    placeholder={form.placeholder} 
                    as="textarea" 
                    rows={form.rows}
                    onChange={form.onChange} 
                />
            </Form.Group>
        }

        if(form.type === "SELECT") {
            return <Form.Group>
                <Form.Control id={form.id} as="select" defaultValue={form.selected} onChange={form.onChange}>
                    {form.options!.map((option) => { return <option value={option.value}>{option.title}</option>})}
                </Form.Control>
            </Form.Group>
        }
    })}
    </Form>

    return view;
}

export default FormComponent;