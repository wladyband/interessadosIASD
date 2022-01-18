import 'package:interessado/models/discipulo.dart';

abstract class IDiscipuloRepository{
  Future<List<Discipulo>> findAllDiscipulo();
}