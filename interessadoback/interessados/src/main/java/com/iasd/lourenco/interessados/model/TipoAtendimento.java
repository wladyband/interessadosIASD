package com.iasd.lourenco.interessados.model;

public enum TipoAtendimento {

	ATENDIMENTO_1("Pequeno Grupo"),
	ATENDIMENTO_2("Classe Bíblica"),
	ATENDIMENTO_3("Duplas Missionárias"),
	ATENDIMENTO_4("Evangelismo Público"),
	ATENDIMENTO_5("Desbravadores");
	

	private final String descricao;

	TipoAtendimento(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}
