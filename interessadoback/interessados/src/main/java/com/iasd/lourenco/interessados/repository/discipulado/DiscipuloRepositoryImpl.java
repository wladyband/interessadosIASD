package com.iasd.lourenco.interessados.repository.discipulado;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;

import com.iasd.lourenco.interessados.model.Discipulo;
import com.iasd.lourenco.interessados.model.Discipulo_;
import com.iasd.lourenco.interessados.repository.filter.DiscipuloFilter;

public class DiscipuloRepositoryImpl implements DiscipuloRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Discipulo> filtrar(DiscipuloFilter discipuloFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Discipulo> criteria = builder.createQuery(Discipulo.class);
		Root<Discipulo> root = criteria.from(Discipulo.class);

		Predicate[] predicates = criarRestricoes(discipuloFilter, builder, root);
		criteria.where(predicates);

		TypedQuery<Discipulo> query = manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<>(query.getResultList(), pageable, total(discipuloFilter));
	}



	private Predicate[] criarRestricoes(DiscipuloFilter discipuloFilter, CriteriaBuilder builder,
			Root<Discipulo> root) {
		List<Predicate> predicates = new ArrayList<>();

		if(!ObjectUtils.isEmpty(discipuloFilter.getNome())) {
			predicates.add(builder.like(
					builder.lower(root.get(
							Discipulo_.nome
							)), "%" + discipuloFilter.getNome().toLowerCase() + "%"));
		}
		
		if(!ObjectUtils.isEmpty(discipuloFilter.getTelefone())) {
			predicates.add(builder.like(
					builder.lower(root.get(
							Discipulo_.telefone
							)), "%" + discipuloFilter.getTelefone().toLowerCase() + "%"));
		}
		
	
		return predicates.toArray(new Predicate[predicates.size()]);
	}
	
	private void adicionarRestricoesDePaginacao(TypedQuery<Discipulo> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistrosPorPagina);
	}

	private Long total(DiscipuloFilter discipuloFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Discipulo> root = criteria.from(Discipulo.class);
		
		Predicate[] predicates = criarRestricoes(discipuloFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}

}
