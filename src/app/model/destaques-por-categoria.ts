export class DestaquesPorCategoria {

    public id: number
    public categoria: number
    public pfps: string
    public destaque: boolean

    constructor(){
        this.id = 0,
        this.categoria = 0,
        this.pfps = "",
        this.destaque = true
    }

}
