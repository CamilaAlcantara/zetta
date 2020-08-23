package com.zettaApp.apiZetta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zettaApp.apiZetta.models.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Long>{

	
	@Query(value="select tb.* from TB_CARGO tb " + 
			"WHERE ATIVO = True",nativeQuery = true)
	public List<Cargo> getListar();
}
