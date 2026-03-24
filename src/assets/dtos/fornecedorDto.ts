import { EnumCategoriaRisco } from '../enums/enumCategoriaRisco';
import { EnumPorte } from '../enums/enumPorte';
import { EnumTipoFornecedor } from '../enums/enumTipoFornecedor';
import { Endereco } from './endereco';

export interface FornecedorDto{
    id?: string;
    codigo: string;
    razaoSocial: string;
    cnpj: string;
    tipo: EnumTipoFornecedor;
    segmento: string;
    porte?: EnumPorte;
    endereco?: Endereco;
    telefone?: string;
    email?: string;
    site?: string;
    ativo?:boolean;
    dataCadastro?: Date;
    dataUltimaAtualizacao?: Date;
    categoriaRisco: EnumCategoriaRisco;
    pontuacaoConformidade?: number;
    observacoes?: string;
}
