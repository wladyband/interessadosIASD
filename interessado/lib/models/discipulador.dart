import 'package:interessado/models/ocupacao.dart';

class Discipulador{
  String codigo;
  String nome;
  List<Ocupacao> ocupacao;

  Discipulador({
    required this.codigo,
    required this.nome,
    required this.ocupacao,
  });
}