package com.iasd.lourenco.interessados.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.iasd.lourenco.interessados.event.RecursoCriadoEvent;
import com.iasd.lourenco.interessados.model.Ocupacao;
import com.iasd.lourenco.interessados.repository.OcupacaoRepository;

@RestController
@RequestMapping("/ocupacoes")
public class OcupacaoResource {
	
	@Autowired
	private OcupacaoRepository ocupacaoRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	@GetMapping
	public List<Ocupacao> listar(){
		return ocupacaoRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Ocupacao> criar(@Valid @RequestBody Ocupacao ocupacao, HttpServletResponse response) {
		Ocupacao ocupacaoSalva = ocupacaoRepository.save(ocupacao);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, ocupacaoSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(ocupacaoSalva);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Ocupacao> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Ocupacao> ocupacao = this.ocupacaoRepository.findById(codigo);
		return ocupacao.isPresent() ? 
		        ResponseEntity.ok(ocupacao.get()) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		ocupacaoRepository.deleteById(codigo);
	}

}
