import { AvaliacoesProdutos } from "./avaliacoes-produtos"
import { Dimensoes } from "./dimensoes"

export class Produtos {

    public id: number
    public nome: string
    public descricao: string
    public marca: string
    public preco: number
    public imagem: string
    public categoria: any
    public subcategoria: number
    public avaliacoes: AvaliacoesProdutos[]
    public dimensoes: Dimensoes
    public estoque: number
    public fabricante: string
    public volume: number
    public tipoDoVolume: string
    public qtdEmbalagem: number
    public promocao: boolean

    constructor() {
        this.id = 0
        this.nome = ""
        this.descricao = ""
        this.marca = ""
        this.preco = 0
        this.imagem = ""
        this.categoria = 0
        this.subcategoria = 0
        this.avaliacoes = []
        this.dimensoes = {
            volume: 0,
            tipoDoVolume: "",
            qtdEmbalagem: 0
        }
        this.estoque = 0
        this.fabricante = ""
        this.volume = 0
        this.tipoDoVolume = ""
        this.qtdEmbalagem = 0
        this.promocao = true
    }

}
