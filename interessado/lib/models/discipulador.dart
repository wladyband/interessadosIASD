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

  Map<String, dynamic> toMap() {
    return {
      'codigo': this.codigo,
      'nome': this.nome,
      'ocupacao': this.ocupacao,
    };
  }

  factory Discipulador.fromMap(Map<String, dynamic> map) {
    return Discipulador(
      codigo: map['codigo'] as String,
      nome: map['nome'] as String,
      ocupacao: map['ocupacao'] as List<Ocupacao>,
    );
  }
}