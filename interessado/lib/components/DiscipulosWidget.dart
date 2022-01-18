import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:interessado/models/discipulo.dart';
import 'package:intl/intl.dart';

class DiscipulosWidget extends StatefulWidget {
  final Discipulo discipulo;
  const DiscipulosWidget({
    Key? key,
    required this.discipulo
  }) : super(key: key);

  @override
  State<DiscipulosWidget> createState() => _DiscipulosWidgetState();
}

class _DiscipulosWidgetState extends State<DiscipulosWidget> {

  bool _expanded = false;
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: [
          ListTile(
              title: Text('${widget.discipulo.nome}'),
            subtitle: Text(
              widget.discipulo.telefone
            ),
            trailing: IconButton(
              icon: Icon(Icons.expand_more),
              onPressed: (){
                setState(() {
                  _expanded = !_expanded;
                });
              },
            ),
          ),
          if(_expanded)
            Container(
              padding: const EdgeInsets.symmetric(
                horizontal: 15,
                vertical: 4,
              ),
              child: Row(
                children: [
                  Text('Endereço: ' + widget.discipulo.logradouro),
                ],
              ),
            ),
          if(_expanded)
            Container(
              padding: const EdgeInsets.symmetric(
                horizontal: 15,
                vertical: 4,
              ),
              child: Row(
                children: [
                  Text('Data de Nascimento: ' + widget.discipulo.dataNascimento),
                ],
              ),
            ),
          if(_expanded)
            Container(
              padding: const EdgeInsets.symmetric(
                horizontal: 15,
                vertical: 4,
              ),
              child: Row(
                children: [
                  Text('Origem : ' + widget.discipulo.origem),
                ],
              ),
            ),
        ],
      ),
    );
  }
}
