export class PedidosUsuario {

    public id: number
    public dataDoPedido: string
    public statusDoPedido: string
    public pedidoFinalizado: boolean

    constructor() {
    this.id = 0
    this.dataDoPedido = ""
    this.statusDoPedido = ""
    this.pedidoFinalizado = true
}

}
