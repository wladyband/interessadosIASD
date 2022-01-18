class Ocupacao{
  String codigo;
  String nome;

  Ocupacao({
    required this.codigo,
    required this.nome,
  });

  Map<String, dynamic> toMap() {
    return {
      'codigo': this.codigo,
      'nome': this.nome,
    };
  }

  factory Ocupacao.fromMap(Map<String, dynamic> map) {
    return Ocupacao(
      codigo: map['codigo'] as String,
      nome: map['nome'] as String,
    );
  }
}