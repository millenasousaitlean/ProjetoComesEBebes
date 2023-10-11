import { Carrinho } from "./carrinho"
import { Carteira } from "./carteira"
import { Endereco } from "./endereco"
import { PedidosUsuario } from "./pedidos-usuario"

export class Usuarios {

   public id: number
   public nomeCompleto: string
   public maiorDeIdade: boolean
   public email: string
   public senha: string
   public admin: boolean
   public pedidosDoUsuario: PedidosUsuario[]
   public carrinho: Carrinho[]
   public enderecos: Endereco[]
   public carteira: Carteira[]

   constructor(){
    this.id = 0
   this.nomeCompleto = ""
   this.maiorDeIdade = true
   this.email = ""
   this.senha = ""
   this.admin = true
   this.pedidosDoUsuario = []
   this.carrinho = []
   this.enderecos = []
   this.carteira = []
   }


}
