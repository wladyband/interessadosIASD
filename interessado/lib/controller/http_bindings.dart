import 'package:get/get.dart';
import 'package:interessado/controller/http_controller.dart';
import 'package:interessado/repository/discipulo_repositoryImpl.dart';
import 'package:interessado/repository/i_dicipulo_repository.dart';

class HttpBindings implements Bindings{
  @override
  void dependencies() {
    Get.put<IDiscipuloRepository>(DiscipuloHttpRepositoryImpl());
    Get.put(HttpController(Get.find()));
  }

}