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
}