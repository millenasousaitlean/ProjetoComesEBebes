export class Carteira {

    public id: number
    public tipo: number
    public infos: {
        bandeira: number
        numero: string
        nomeEscritoCartao: string
        mesVencimento: string
        anoVencimento: number
        chave: any
        enderecoDeCobranca: number
    }

    constructor(){
        this.id = 0
        this.tipo = 0
        this.infos = {
            bandeira: 0,
            numero: "",
            nomeEscritoCartao: "",
            mesVencimento: "",
            anoVencimento: 0,
            chave: "",
            enderecoDeCobranca: 0
        }
    }

}