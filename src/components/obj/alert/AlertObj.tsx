import React from 'react'
import Alert from 'react-bootstrap/Alert'

interface AlertObjProps {
    alertVisible: boolean
    setAlertVisible: () => void
}

const AlertObj = ({ alertVisible, setAlertVisible } : AlertObjProps) => {
    if(alertVisible) {
        return (
            <Alert variant="success" onClose={() => setAlertVisible} dismissible>
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
            </Alert>
        )   
    } else {
        return (
            <></>
        )
    }
}

export default AlertObj;