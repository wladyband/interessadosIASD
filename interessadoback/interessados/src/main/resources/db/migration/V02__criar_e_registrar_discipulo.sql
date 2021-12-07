CREATE TABLE discipulo (
	codigo serial,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(50),
	logradouro VARCHAR(100),
	origem VARCHAR(100),
	tipo_interesse VARCHAR(20) NOT NULL,
	tipo_atendimento VARCHAR(20) NOT NULL,
	primary key (codigo)
);

INSERT INTO discipulo ( nome, telefone, logradouro, origem, tipo_interesse, tipo_atendimento) values ('Wladimir', '34342413', 'Rua das tantas', 'Convite',  1, 1);
