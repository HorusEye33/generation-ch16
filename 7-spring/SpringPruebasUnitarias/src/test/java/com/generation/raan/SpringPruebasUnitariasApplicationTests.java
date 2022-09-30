package com.generation.raan;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.generation.raan.Model.UsuarioModel;
import com.generation.raan.Repository.UsuarioRepository;

@SpringBootTest
class SpringPruebasUnitariasApplicationTests {
	
    @Autowired 
    private UsuarioRepository usuariorepository;
	@Test
	void crearUsuarioTest() {
		
		UsuarioModel usuariomodelo = new UsuarioModel();
		
		usuariomodelo.setId(2);
		usuariomodelo.setNombre("Raul");
		usuariomodelo.setClave("12345");
		
		UsuarioModel r = usuariorepository.save(usuariomodelo);
		
		assertTrue(r.getClave().equalsIgnoreCase(usuariomodelo.getNombre()));
		
	}

}
