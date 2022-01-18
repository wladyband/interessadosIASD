class TipoInteresse{
    String codigo;
    String modelo;
    String descricao;

    TipoInteresse({
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

  factory TipoInteresse.fromMap(Map<String, dynamic> map) {
    return TipoInteresse(
      codigo: map['codigo'] as String,
      modelo: map['modelo'] as String,
      descricao: map['descricao'] as String,
    );
  }
}