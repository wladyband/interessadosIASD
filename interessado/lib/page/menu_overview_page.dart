import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:interessado/page/discipulo_overview_page.dart';
import 'package:interessado/uitls/app_routes_images.dart';

class MenuOverView extends StatefulWidget {
  @override
  _MenuOverViewState createState() => _MenuOverViewState();
}

class _MenuOverViewState extends State<MenuOverView> {

  void _abrirListaDiscipulos(){
        Navigator.push(context, 
        MaterialPageRoute(builder: (context) => DiscipuloOverView(),),);

  }
  void _abrirListaProfessores(){

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.teal,
          title: Center(child: Text(
              "IASD",
              textAlign: TextAlign.center))
      ),
      body: Container(
        padding: EdgeInsets.all(16),
        child: Column(
          children: <Widget>[
            Center(child: Text("Controle de Interessados", textAlign: TextAlign.center, style: TextStyle(
                fontFamily: 'Montserrat',
                fontSize: 24,
                fontWeight: FontWeight.bold
            ),)),
            Padding(padding: EdgeInsets.only(top: 32),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: <Widget>[
                    GestureDetector(
                      onTap: _abrirListaProfessores,
                      child: Image.asset(AppRoutesImages.IMAGEM_PROFESSOR, width: 100, height: 100),
                    ),
                    GestureDetector(
                      onTap: _abrirListaDiscipulos,
                      child: Image.asset(AppRoutesImages.IMAGEM_STUDENT, width: 100, height: 100),
                    ),
                  ],
                ),
            ),
            Padding(padding: EdgeInsets.only(top: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  Text('Professores'),
                  Text('Discipulos'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}




