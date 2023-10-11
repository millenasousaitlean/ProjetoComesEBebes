import { ItenPedido } from "./iten-pedido"

export class Pedidos {

   public id: number
   public data: string
   public idUsuario: number
   public enderecoDeEntrega: number
   public metodoDePagamento: number
   public statusDeEntrega: string
   public tipoDeEntrega: number
   public valorFrete: number
   public pedidoFinalizado: boolean
   public itensDoPedido: ItenPedido[]
   
   constructor(){
    this.id = 0
    this.data = ""
    this.idUsuario = 0
    this.enderecoDeEntrega = 0
    this.metodoDePagamento = 0
    this.statusDeEntrega = ""
    this.tipoDeEntrega = 0
    this.valorFrete = 0
    this.pedidoFinalizado = true
    this.itensDoPedido = []
   }
    

}
