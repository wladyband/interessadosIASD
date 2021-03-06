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
import com.iasd.lourenco.interessados.model.TipoInteresse;
import com.iasd.lourenco.interessados.repository.TipoInteresseRepository;

@RestController
@RequestMapping("/tipoInteressados")
public class TipoInteresseResource {
	
	@Autowired
	private TipoInteresseRepository tipoInteresseRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	@GetMapping
	public List<TipoInteresse> listar(){
		return tipoInteresseRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<TipoInteresse> criar(@Valid @RequestBody TipoInteresse tipoInteresse, HttpServletResponse response) {
		TipoInteresse tipoInteresseSalva = tipoInteresseRepository.save(tipoInteresse);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, tipoInteresse.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(tipoInteresseSalva);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<TipoInteresse> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<TipoInteresse> tipoInteresse = this.tipoInteresseRepository.findById(codigo);
		return tipoInteresse.isPresent() ? 
		        ResponseEntity.ok(tipoInteresse.get()) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		tipoInteresseRepository.deleteById(codigo);
	}
}
