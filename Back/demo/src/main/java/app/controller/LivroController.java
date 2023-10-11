package app.controller;

import app.dto.LivrosDTO;
import app.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livro")
@CrossOrigin(origins = "http://localhost:4200")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    private ResponseEntity<List<LivrosDTO>> listAll(){
        try {
            List<LivrosDTO> lista = livroService.listAll();
            return new ResponseEntity<>(lista, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    private ResponseEntity<LivrosDTO> save(@RequestBody LivrosDTO livrosDTO){
        try {
            LivrosDTO sava =livroService.save(livrosDTO);
            return new ResponseEntity<>(sava, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<LivrosDTO> update(@PathVariable Long id, @RequestBody LivrosDTO livrosDTO) {
        try {
            LivrosDTO sava =livroService.update(livrosDTO);
            return new ResponseEntity<>(sava, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePedido(@PathVariable Long id) {
        livroService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
