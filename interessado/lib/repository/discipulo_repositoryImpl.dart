import 'dart:convert';
import 'dart:developer';
import 'package:interessado/models/discipulo.dart';
import 'package:interessado/repository/i_dicipulo_repository.dart';
import 'package:http/http.dart' as http;

class DiscipuloHttpRepositoryImpl implements IDiscipuloRepository{

  @override
  Future<List<Discipulo>> findAllDiscipulo() async {
    final response = await http.get(Uri.parse('https://interes.herokuapp.com/discipulos'));
    print(jsonDecode(response.body));
    final List<dynamic> responseMap = jsonDecode(response.body);
    var list = responseMap.map<Discipulo>((resp) => Discipulo.fromMap(resp)).toList();

    return list;
  }

}