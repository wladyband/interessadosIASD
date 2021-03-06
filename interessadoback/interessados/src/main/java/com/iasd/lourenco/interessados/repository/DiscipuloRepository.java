package com.iasd.lourenco.interessados.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iasd.lourenco.interessados.model.Discipulo;
import com.iasd.lourenco.interessados.repository.discipulado.DiscipuloRepositoryQuery;

public interface DiscipuloRepository extends JpaRepository<Discipulo, Long>, DiscipuloRepositoryQuery{

}
