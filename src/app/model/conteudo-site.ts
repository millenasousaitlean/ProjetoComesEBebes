import { DestaquesPorCategoria } from "./destaques-por-categoria"
import { DestaquesPromocionais } from "./destaques-promocionais"
import { ImagensBanner } from "./imagens-banner"

export class ConteudoSite {
    
    public imagensBanner: ImagensBanner[]
    public destaquesPromocionais: DestaquesPromocionais[]
    public destaquesPorCategoria: DestaquesPorCategoria[]

    constructor(){
        this.imagensBanner = [],
        this.destaquesPromocionais = [],
        this.destaquesPorCategoria = []
    }

}
