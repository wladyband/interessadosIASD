import 'package:get/get.dart';
import 'package:interessado/repository/i_dicipulo_repository.dart';

class HttpController extends GetxController with StateMixin{

  final IDiscipuloRepository _IDiscipuloRepository;
  HttpController(this._IDiscipuloRepository);

   @override
  void onInit() {
    super.onInit();
    findDiscipulo();
  }

  void findDiscipulo() async {
     change([], status: RxStatus.loading());
     try{
       final dados = await _IDiscipuloRepository.findAllDiscipulo();
       change(dados, status: RxStatus.success());
     } catch(e){
       change([], status: RxStatus.error('Erro ao tentar localizar registro'));
     }
  }
}