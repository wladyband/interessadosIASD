CREATE TABLE discipulador (
    codigo SERIAL,
    nome VARCHAR(50) NOT NULL,
    codigo_ocupacao int not NULL,
    codigo_discipulo int not NULL,
    FOREIGN KEY (codigo_ocupacao) REFERENCES ocupacao(codigo),
    FOREIGN KEY (codigo_discipulo) REFERENCES discipulo(codigo),
    PRIMARY KEY(codigo)
);

INSERT INTO discipulador (nome, codigo_ocupacao, codigo_discipulo) values ('Flávia', 1, 1);
INSERT INTO discipulador (nome, codigo_ocupacao, codigo_discipulo) values ('Jairo', 2, 1);