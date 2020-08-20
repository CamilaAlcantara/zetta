package com.zettaApp.apiZetta.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zettaApp.apiZetta.models.Cargo;
import com.zettaApp.apiZetta.repository.CargoRepository;

@RestController
@RequestMapping(value="/cargo")
public class CargoResource {

	@Autowired
	CargoRepository cargoRepository;
	
	
	@GetMapping("/listar")
	public List<Cargo> ListarCargo(){
		return cargoRepository.findAll();
	}
	
	
	
}
