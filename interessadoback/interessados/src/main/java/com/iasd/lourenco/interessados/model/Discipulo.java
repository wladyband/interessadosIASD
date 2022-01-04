package com.iasd.lourenco.interessados.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "discipulo")
public class Discipulo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	private String nome;
	private String logradouro;
	private String telefone;

	@Column(name = "data_nascimento")
	private LocalDate dataNascimento;

	private String origem;

	@ManyToOne
	@JoinColumn(name = "codigo_interesse")
	private TipoInteresse tipo_interesse;

	@ManyToOne
	@JoinColumn(name = "codigo_atendimento")
	private TipoAtendimento tipo_atendimento;

	@ManyToOne
	@JoinColumn(name = "codigo_discipulador")
	private Discipulador discipulador;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public TipoInteresse getTipo_interesse() {
		return tipo_interesse;
	}

	public void setTipo_interesse(TipoInteresse tipo_interesse) {
		this.tipo_interesse = tipo_interesse;
	}

	public TipoAtendimento getTipo_atendimento() {
		return tipo_atendimento;
	}

	public void setTipo_atendimento(TipoAtendimento tipo_atendimento) {
		this.tipo_atendimento = tipo_atendimento;
	}

	public Discipulador getDiscipulador() {
		return discipulador;
	}

	public void setDiscipulador(Discipulador discipulador) {
		this.discipulador = discipulador;
	}

	@Override
	public int hashCode() {
		return Objects.hash(codigo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Discipulo other = (Discipulo) obj;
		return Objects.equals(codigo, other.codigo);
	}

}
