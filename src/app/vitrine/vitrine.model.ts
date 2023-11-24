export class Vitrine {
    id_produto: number = 0;
    nome: string = "";
    descricao: string = "";
    tipo_produto: string = "";
    categoria: string = "";
    marca: string = "";
    cor: string = "";
    material_principal: string = "";
    observacao: string = "";
    preco: number = 0;

    constructor(obj?:Vitrine){
        if(obj!=undefined){
            this.id_produto = obj.id_produto;
            this.nome = obj.nome;
            this.categoria = obj.categoria;
            this.descricao = obj.descricao;
            this.tipo_produto = obj.tipo_produto;
            this.marca = obj.marca;
            this.cor = obj.cor;
            this.material_principal = obj.material_principal;
            this.observacao = obj.observacao;
            this.preco = obj.preco;
        }
    }
    
}
