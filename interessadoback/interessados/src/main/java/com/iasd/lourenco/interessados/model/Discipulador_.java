package com.iasd.lourenco.interessados.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Discipulador.class)
public abstract class Discipulador_ {

	public static volatile SingularAttribute<Discipulador, Long> codigo;
	public static volatile SingularAttribute<Discipulador, Discipulo> discipulo;
	public static volatile SingularAttribute<Discipulador, Ocupacao> ocupacao;
	public static volatile SingularAttribute<Discipulador, String> nome;

	public static final String CODIGO = "codigo";
	public static final String DISCIPULO = "discipulo";
	public static final String OCUPACAO = "ocupacao";
	public static final String NOME = "nome";

}

