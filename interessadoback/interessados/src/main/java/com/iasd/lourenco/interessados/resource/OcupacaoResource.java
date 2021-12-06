package com.iasd.lourenco.interessados.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iasd.lourenco.interessados.model.Ocupacao;
import com.iasd.lourenco.interessados.repository.OcupacaoRepository;

@RestController
@RequestMapping("/ocupacoes")
public class OcupacaoResource {
	
	@Autowired
	private OcupacaoRepository ocupacaoRepository;
	
	@GetMapping
	public List<Ocupacao> listar(){
		return ocupacaoRepository.findAll();
	}

}
