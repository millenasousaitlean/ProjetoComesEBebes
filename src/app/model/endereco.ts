export class Endereco {

    public id: number
    public nomeCompleto: string
    public endereco: string
    public numero: number
    public bairro: string
    public cidade: string
    public estado: string
    public cep: string
    public telefone: string
    public enderecoPadrao: boolean

    constructor() {
        this.id = 0
        this.nomeCompleto = ""
        this.endereco = ""
        this.numero = 0
        this.bairro = ""
        this.cidade = ""
        this.estado = ""
        this.cep = ""
        this.telefone = ""
        this.enderecoPadrao = true
    }

}
