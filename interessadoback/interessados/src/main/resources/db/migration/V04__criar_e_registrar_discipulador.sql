CREATE TABLE discipulador (
    codigo SERIAL,
    nome VARCHAR(50) NOT NULL,
    codigo_ocupacao int not NULL,
    FOREIGN KEY (codigo_ocupacao) REFERENCES ocupacao(codigo),
    PRIMARY KEY(codigo)
);

INSERT INTO discipulador (nome, codigo_ocupacao) values ('Flávia', 1);
INSERT INTO discipulador (nome, codigo_ocupacao) values ('Jairo', 2);