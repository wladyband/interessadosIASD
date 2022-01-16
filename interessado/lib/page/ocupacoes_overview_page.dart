import 'package:flutter/material.dart';
import 'package:interessado/data/dummy_data.dart';
import 'package:interessado/models/ocupacao.dart';

class OcupacoesOverViewPage extends StatelessWidget {
  final List<Ocupacao> loadOcupacoes = dummyOcupacoes;


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sistema de Interessados'),
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(10),
        itemCount: loadOcupacoes.length,
          itemBuilder: (ctx, i ) => Text(loadOcupacoes[i].nome),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 3/2,
            crossAxisSpacing: 10,
            mainAxisSpacing:10,
        ),
      ),
    );
  }
}
