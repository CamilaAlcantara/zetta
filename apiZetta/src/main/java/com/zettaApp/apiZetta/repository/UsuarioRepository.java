package com.zettaApp.apiZetta.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.zettaApp.apiZetta.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
