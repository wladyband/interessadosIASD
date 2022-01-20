
class Discipulo{
   String codigo;
   String nome;
   String logradouro;
   String telefone;
   String dataNascimento;
   String origem;

   Discipulo({
    required this.codigo,
    required this.nome,
    required this.logradouro,
    required this.telefone,
    required this.dataNascimento,
    required this.origem,
   });

   Map<String, dynamic> toMap() {
    return {
      'codigo': this.codigo,
      'nome': this.nome,
      'logradouro': this.logradouro,
      'telefone': this.telefone,
      'dataNascimento': this.dataNascimento,
      'origem': this.origem,
    };
  }

  factory Discipulo.fromMap(Map<String, dynamic> map) {
    return Discipulo(
      codigo: map['codigo'].toString(),
      nome: map['nome'] as String,
      logradouro: map['logradouro'] as String,
      telefone: map['telefone'] as String,
      dataNascimento: map['dataNascimento'] as String,
      origem: map['origem'] as String,
    );
  }
}