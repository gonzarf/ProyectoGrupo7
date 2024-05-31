import { Binary } from "@angular/compiler"

export class Noticia{
    title=""
    description!:string
    type=""
    image=""
}
export class NoticiaExistente{
    id?=Binary
    title=""
    description!:string
    type=""
    image=""
}