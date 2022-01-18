import 'dart:convert';
import 'package:interessado/models/discipulo.dart';
import 'package:interessado/repository/i_dicipulo_repository.dart';
import 'package:http/http.dart' as http;

class DiscipuloHttpRepositoryImpl implements IDiscipuloRepository{

  @override
  Future<List<Discipulo>> findAllDiscipulo() async {
    final response = await http.get(Uri.parse('http://localhost:8080/discipulos'));

    final List<dynamic> responseMap = jsonDecode(response.body);
    return responseMap.map<Discipulo>((resp) => Discipulo.fromMap(resp)).toList();
  }

}