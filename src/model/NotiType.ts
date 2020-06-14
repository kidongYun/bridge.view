class NotiType {
    text: string
    timer: number
    isShow: boolean

    constructor(text: string, timer: number, isShow: boolean) {
        this.text = text
        this.timer = timer
        this.isShow = isShow
    }
}

export default NotiType;