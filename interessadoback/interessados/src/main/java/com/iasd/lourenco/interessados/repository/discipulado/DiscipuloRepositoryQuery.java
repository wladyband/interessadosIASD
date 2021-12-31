package com.iasd.lourenco.interessados.repository.discipulado;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.iasd.lourenco.interessados.model.Discipulo;
import com.iasd.lourenco.interessados.repository.filter.DiscipuloFilter;

public interface DiscipuloRepositoryQuery {
	
	public Page<Discipulo> filtrar(DiscipuloFilter discipuloFilter, Pageable pageable);

}
