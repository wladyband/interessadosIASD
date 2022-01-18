import 'package:interessado/models/discipulador.dart';
import 'package:interessado/models/tipo_atendimento.dart';
import 'package:interessado/models/tipo_interesse.dart';

class Discipulo{
   String codigo;
   String nome;
   String logradouro;
   String telefone;
   String dataNascimento;
   String origem;
   List<TipoInteresse> tipoInteresse;
   List<TipoAtendimento> tipoAtendimento;
   List<Discipulador> discipulador;

   Discipulo({
    required this.codigo,
    required this.nome,
    required this.logradouro,
    required this.telefone,
    required this.dataNascimento,
    required this.origem,
    required this.tipoInteresse,
    required this.tipoAtendimento,
    required this.discipulador,
  });

   Map<String, dynamic> toMap() {
    return {
      'codigo': this.codigo,
      'nome': this.nome,
      'logradouro': this.logradouro,
      'telefone': this.telefone,
      'dataNascimento': this.dataNascimento,
      'origem': this.origem,
      'tipoInteresse': this.tipoInteresse,
      'tipoAtendimento': this.tipoAtendimento,
      'discipulador': this.discipulador,
    };
  }

  factory Discipulo.fromMap(Map<String, dynamic> map) {
    return Discipulo(
      codigo: map['codigo'] as String,
      nome: map['nome'] as String,
      logradouro: map['logradouro'] as String,
      telefone: map['telefone'] as String,
      dataNascimento: map['dataNascimento'] as String,
      origem: map['origem'] as String,
      tipoInteresse: map['tipoInteresse'] as List<TipoInteresse>,
      tipoAtendimento: map['tipoAtendimento'] as List<TipoAtendimento>,
      discipulador: map['discipulador'] as List<Discipulador>,
    );
  }
}