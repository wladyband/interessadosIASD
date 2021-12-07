package com.iasd.lourenco.interessados.model;

public enum TipoInteresse {
	
	NIVEL_A("Frequenta a igreja e não há impedimento para ser batizado"),
	NIVEL_B("Frequenta a igreja e possui algum tipo de impedimento (não é casado, trabalha aos sábado, etc.)"),
	NIVEL_C("Frequenta a igreja em datas especiais. Baixo interesse (vai à igreja, participa, conhece. Mas reluta ainda com a decisão)");

	private final String descricao;

	TipoInteresse(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
}
