package com.iasd.lourenco.interessados.resource;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import com.iasd.lourenco.interessados.model.Discipulo;
import com.iasd.lourenco.interessados.repository.DiscipuloRepository;
import com.iasd.lourenco.interessados.repository.filter.DiscipuloFilter;

@RestController
@RequestMapping("/discipulos")
public class DiscipuloResource {
	
	@Autowired
	private DiscipuloRepository discipuloRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	@GetMapping
	public Page<Discipulo> pesquisar(DiscipuloFilter discipuloFilter, Pageable pageable){
		return discipuloRepository.filtrar(discipuloFilter, pageable);
	}
	
	@PostMapping
	public ResponseEntity<Discipulo> criar(@Valid @RequestBody Discipulo discipulo, HttpServletResponse response) {
		Discipulo discipuloSalva = discipuloRepository.save(discipulo);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, discipuloSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(discipuloSalva);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Discipulo> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<Discipulo> discipulo = this.discipuloRepository.findById(codigo);
		return discipulo.isPresent() ? 
		        ResponseEntity.ok(discipulo.get()) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		discipuloRepository.deleteById(codigo);
	}

}
