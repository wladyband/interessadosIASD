import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:interessado/components/DiscipulosWidget.dart';
import 'package:interessado/data/dummy_data.dart';
import 'package:interessado/models/discipulo.dart';

class DiscipuloOverView extends StatelessWidget {
  const DiscipuloOverView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final List<Discipulo> discipulos = content;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.teal,
        title: Text('Lista de Discipulos'),
      ),
      body: ListView.builder(
        itemCount: discipulos.length,
      itemBuilder: (ctx, i) => DiscipulosWidget(discipulo: discipulos[i]),
      )
    );
  }
}

