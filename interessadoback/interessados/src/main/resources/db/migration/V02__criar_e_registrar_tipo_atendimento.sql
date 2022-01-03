CREATE TABLE tipo_atendimento (
    codigo SERIAL,
    modelo VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    PRIMARY KEY(codigo)
);

INSERT INTO tipo_atendimento (modelo, descricao) values ('ATENDIMENTO_1', 'Pequeno Grupo');
INSERT INTO tipo_atendimento (modelo, descricao) values ('ATENDIMENTO_2', 'Classe Bíblica');
INSERT INTO tipo_atendimento (modelo, descricao) values ('ATENDIMENTO_3', 'Duplas Missionárias');
INSERT INTO tipo_atendimento (modelo, descricao) values ('ATENDIMENTO_4', 'Evangelismo Público');
INSERT INTO tipo_atendimento (modelo, descricao) values ('ATENDIMENTO_5', 'Desbravadores');