import { BandeirasCartao } from "./bandeiras-cartao"
import { TiposPagamento } from "./tipos-pagamento"

export class MetodosPagamentos {

   public tiposPagamentos: TiposPagamento[]
   public bandeirasCartao: BandeirasCartao[]

   constructor(){
    this.tiposPagamentos = [],
    this.bandeirasCartao = []
   }

}
