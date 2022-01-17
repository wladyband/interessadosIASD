import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:interessado/data/dummy_data.dart';
import 'package:interessado/models/ocupacao.dart';

class MenuOverViewPage extends StatelessWidget {
  _abrirListaDiscipulos(){
    
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text(
          "IASD",
          textAlign: TextAlign.center))
      ),
      body: Container(
        padding: const EdgeInsets.all(16),
        child: Container(
          child: Column(
            children: <Widget> [
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
                    onTap: _abrirListaDiscipulos(),
                    child: Image.asset('assets/images/professor.png', width: 100, height: 100,),
                  ),
                  GestureDetector(
                    onTap: _abrirListaDiscipulos(),
                    child: Image.asset('assets/images/study.png', width: 100, height: 100,),
                  )
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
      ),
    );
  }
}
