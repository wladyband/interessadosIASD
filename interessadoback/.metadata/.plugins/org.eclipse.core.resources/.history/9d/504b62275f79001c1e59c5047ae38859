CREATE TABLE discipulo (
	codigo serial,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(50),
	data_nascimento DATE,
	logradouro VARCHAR(100),
	origem VARCHAR(100),
	codigo_interesse int not NULL,
	codigo_atendimento int not NULL,
	codigo_discipulador int not NULL,
	FOREIGN KEY (codigo_interesse) REFERENCES tipo_interesse(codigo),
	FOREIGN KEY (codigo_atendimento) REFERENCES tipo_atendimento(codigo),
	FOREIGN KEY (codigo_discipulador) REFERENCES discipulador(codigo),
	primary key (codigo)
);

INSERT INTO discipulo ( 
nome, 
telefone, 
data_nascimento,  
logradouro, 
origem, 
codigo_interesse, 
codigo_atendimento, 
codigo_discipulador) 

values (
'Wladimir', 
'(11)93434-2413', 
'2017-02-10', 
'Rua das tantas', 
'Convite',  
1, 
1, 
1);
INSERT INTO discipulo ( nome, telefone, data_nascimento,  logradouro, origem, codigo_interesse, codigo_atendimento, codigo_discipulador) values ('Paulo da cunha', '(51)93434-2413', '2017-02-10', 'Rua das tantasjdscnsdnjkjdsnkfjnsd', 'Convite',  1, 1, 1);
INSERT INTO discipulo ( nome, telefone, data_nascimento,  logradouro, origem, codigo_interesse, codigo_atendimento, codigo_discipulador) values ('Marcelo Das tantas', '(81)93434-2413', '2017-02-10', 'Rua das tantasjcnsdkjncdskjncsdk', 'Convite',  1, 1, 1);