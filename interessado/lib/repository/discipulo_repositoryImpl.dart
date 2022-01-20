import 'dart:convert';
import 'dart:developer';
import 'package:interessado/models/discipulo.dart';
import 'package:interessado/repository/i_dicipulo_repository.dart';
import 'package:http/http.dart' as http;

class DiscipuloHttpRepositoryImpl implements IDiscipuloRepository{

  @override
  Future<List<Discipulo>> findAllDiscipulo() async {

    final response = await http
        .get(Uri.parse('https://interessadosflutter.herokuapp.com/discipulos'));

    if(response.statusCode == 200) {
      final decoded = jsonDecode(response.body);

      final List<dynamic> responseMap = decoded['content'];

      return responseMap.map<Discipulo>((resp) => Discipulo.fromMap(resp)).toList();
    }
    return [];
  }

}

/*
* @override
  Future<List<Discipulo>> findAllDiscipulo() async {
    final response = await http.get(
      Uri.parse('https://interessadosflutter.herokuapp.com/discipulos'),
    );
    if (response.statusCode == 200) {
      return jsonDecode(response.body)['content']
          .map<Discipulo>((discipulo) => Discipulo.fromMap(discipulo))
          .toList();
    }
    return [];
  }
* */