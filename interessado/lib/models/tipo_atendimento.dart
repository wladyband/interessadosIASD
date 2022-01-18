class TipoAtendimento{
  String codigo;
  String modelo;
  String descricao;

  TipoAtendimento({
    required this.codigo,
    required this.modelo,
    required this.descricao,
  });

  Map<String, dynamic> toMap() {
    return {
      'codigo': this.codigo,
      'modelo': this.modelo,
      'descricao': this.descricao,
    };
  }

  factory TipoAtendimento.fromMap(Map<String, dynamic> map) {
    return TipoAtendimento(
      codigo: map['codigo'] as String,
      modelo: map['modelo'] as String,
      descricao: map['descricao'] as String,
    );
  }
}