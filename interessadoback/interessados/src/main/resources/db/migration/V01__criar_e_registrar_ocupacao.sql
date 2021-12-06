CREATE TABLE ocupacao (
    codigo SERIAL,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY(codigo)
);

INSERT INTO ocupacao (nome) values ('Membro');
INSERT INTO ocupacao (nome) values ('Ancião');
INSERT INTO ocupacao (nome) values ('Diretor Jovem');
INSERT INTO ocupacao (nome) values ('Diagono');
INSERT INTO ocupacao (nome) values ('Diagoniza');