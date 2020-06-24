class ModalType {
    type : string
    parameter: object | undefined
    isShow: boolean

    constructor(type: string, parameter: object | undefined, isShow: boolean) {
        this.type = type;
        this.parameter = parameter
        this.isShow = isShow
    }
}

export default ModalType