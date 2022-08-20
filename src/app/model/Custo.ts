export class Custo {
    id: number | null;
    valor: number;
    tipo: string;
    descricao: string;
    data: string;
    possuiParcela: boolean;
    isCusto: boolean;
    quantidadeParcela: number;

    constructor() {
        this.tipo = '';
        this.descricao = '';
        this.possuiParcela = false;
        this.isCusto = true;
        this.quantidadeParcela = 0;
    }
}