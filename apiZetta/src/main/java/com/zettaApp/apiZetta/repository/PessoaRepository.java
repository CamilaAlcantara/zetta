package com.zettaApp.apiZetta.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.zettaApp.apiZetta.models.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}
