CREATE TABLE discipulo (
	codigo serial,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(50),
	data_nascimento DATE,
	logradouro VARCHAR(100),
	origem VARCHAR(100),
	primary key (codigo)
);

INSERT INTO discipulo ( 
nome, 
telefone, 
data_nascimento,  
logradouro, 
origem
) 

values (
'Wladimir', 
'(11)93434-2413', 
'2017-02-10', 
'Rua das tantas', 
'Convite');
INSERT INTO discipulo ( nome, telefone, data_nascimento,  logradouro, origem) values ('Paulo da cunha', '(51)93434-2413', '2017-02-10', 'Rua das tantasjdscnsdnjkjdsnkfjnsd', 'Convite');
INSERT INTO discipulo ( nome, telefone, data_nascimento,  logradouro, origem) values ('Marcelo Das tantas', '(81)93434-2413', '2017-02-10', 'Rua das tantasjcnsdkjncdskjncsdk', 'Convite');