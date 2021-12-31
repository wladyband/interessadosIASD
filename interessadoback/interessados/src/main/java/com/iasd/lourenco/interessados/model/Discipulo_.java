package com.iasd.lourenco.interessados.model;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Discipulo.class)
public abstract class Discipulo_ {

	public static volatile SingularAttribute<Discipulo, Long> codigo;
	public static volatile SingularAttribute<Discipulo, String> telefone;
	public static volatile SingularAttribute<Discipulo, TipoAtendimento> tipo_atendimento;
	public static volatile SingularAttribute<Discipulo, TipoInteresse> tipo_interesse;
	public static volatile SingularAttribute<Discipulo, String> logradouro;
	public static volatile SingularAttribute<Discipulo, String> origem;
	public static volatile SingularAttribute<Discipulo, String> nome;
	public static volatile SingularAttribute<Discipulo, LocalDate> dataNascimento;

	public static final String CODIGO = "codigo";
	public static final String TELEFONE = "telefone";
	public static final String TIPO_ATENDIMENTO = "tipo_atendimento";
	public static final String TIPO_INTERESSE = "tipo_interesse";
	public static final String LOGRADOURO = "logradouro";
	public static final String ORIGEM = "origem";
	public static final String NOME = "nome";
	public static final String DATA_NASCIMENTO = "dataNascimento";

}

