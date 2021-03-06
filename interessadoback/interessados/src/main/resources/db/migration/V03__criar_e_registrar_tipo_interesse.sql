CREATE TABLE tipo_interesse (
    codigo SERIAL,
    modelo VARCHAR(50) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    PRIMARY KEY(codigo)
);

INSERT INTO tipo_interesse (modelo, descricao) values ('NIVEL_A', 'Frequenta a igreja e não há impedimento para ser batizado');
INSERT INTO tipo_interesse (modelo, descricao) values ('NIVEL_B', 'Frequenta a igreja e possui algum tipo de impedimento (não é casado, trabalha aos sábado, etc.)');
INSERT INTO tipo_interesse (modelo, descricao) values ('NIVEL_C', 'Frequenta a igreja em datas especiais. Baixo interesse (vai à igreja, participa, conhece. Mas reluta ainda com a decisão)');