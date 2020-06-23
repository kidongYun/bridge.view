class ModalType {
    type: string | undefined
    isShow: boolean
    parameter: number | undefined

    constructor(type: string | undefined, isShow: boolean, parameter: number | undefined) {
        this.type = type
        this.isShow = isShow
        this.parameter = parameter
    }
}

export default ModalType