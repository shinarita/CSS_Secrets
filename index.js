class Stack {
    constructor() {
        this.items = []
    }
    // 入栈
    push(element) {
        this.items.push(element)
    }
    // 出栈
    pop(element) {
        this.element.pop()
    }
    // 末位
    get peek() {
        return this.items[this.items.length - 1]
    }
    // 是否为空栈
    get isEmpty() {
        return !this.items.length
    }
    // 尺寸
    get size() {
        return this.items.length
    }
}