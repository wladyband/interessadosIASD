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
import com.iasd.lourenco.interessados.model.Discipulador;
import com.iasd.lourenco.interessados.model.Discipulo;
import com.iasd.lourenco.interessados.repository.DiscipuladorRepository;

@RestController
@RequestMapping("/discipulador")
public class DiscipuladorResource {
	
	@Autowired
	private DiscipuladorRepository discipuladorRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	@GetMapping
	public List<Discipulador> listar(){
		return discipuladorRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Discipulador> criar(@Valid @RequestBody Discipulador discipulador, HttpServletResponse response) {
		Discipulador discipuladorSalva = discipuladorRepository.save(discipulador);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, discipuladorSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(discipuladorSalva);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Discipulador> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Discipulador> discipulador = this.discipuladorRepository.findById(codigo);
		return discipulador.isPresent() ? 
		        ResponseEntity.ok(discipulador.get()) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		discipuladorRepository.deleteById(codigo);
	}

}
