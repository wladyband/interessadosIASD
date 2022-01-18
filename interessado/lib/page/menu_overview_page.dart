import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';
import 'package:interessado/controller/http_bindings.dart';
import 'package:interessado/page/home_page.dart';

class MenuOverView extends StatefulWidget {
  const MenuOverView({Key? key}) : super(key: key);

  @override
  State<MenuOverView> createState() => _MenuOverViewState();
}

class _MenuOverViewState extends State<MenuOverView> {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      getPages: [
        GetPage(
          name: '/', page: () => HomePage(),
          binding: HttpBindings(),
        )
      ],
    );
  }
}
