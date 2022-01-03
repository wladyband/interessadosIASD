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
import com.iasd.lourenco.interessados.model.TipoAtendimento;
import com.iasd.lourenco.interessados.repository.TipoAtendimentoRepository;

@RestController
@RequestMapping("/tipoAtendimentos")
public class TipoAtendimentoResource {
	
	@Autowired
	private TipoAtendimentoRepository tipoAtendimentoRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	
	@GetMapping
	public List<TipoAtendimento> listar(){
		return tipoAtendimentoRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity<TipoAtendimento> criar(@Valid @RequestBody TipoAtendimento tipoAtendimento, HttpServletResponse response) {
		TipoAtendimento tipoAtendimentoSalva = tipoAtendimentoRepository.save(tipoAtendimento);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, tipoAtendimento.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(tipoAtendimentoSalva);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<TipoAtendimento> buscarPeloCodigo(@PathVariable Long codigo) {
		Optional<TipoAtendimento> tipoAtendimento = this.tipoAtendimentoRepository.findById(codigo);
		return tipoAtendimento.isPresent() ? 
		        ResponseEntity.ok(tipoAtendimento.get()) : ResponseEntity.notFound().build();
	}
	
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		tipoAtendimentoRepository.deleteById(codigo);
	}

}
