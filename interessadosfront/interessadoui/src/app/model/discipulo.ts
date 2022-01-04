import { Discipulador } from './discipulador';
import { TipoAtendimento } from './tipoAtendimento';
import { TipoInteresse } from './tipoInteresse';

export class Discipulo {
    codigo?: number;
    nome?: string;
    logradouro?: string;
    telefone?: string;
    dataNascimento?: Date;
    origem?: string;
    tipo_interesse = new TipoInteresse();
    tipo_atendimento = new TipoAtendimento();
    discipulador = new Discipulador();
  }
