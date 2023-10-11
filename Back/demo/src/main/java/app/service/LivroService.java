package app.service;

import app.dto.LivrosDTO;
import app.entity.Livro;
import app.repository.LivrosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivrosRepository livrosRepository;

    private LivrosDTO tolivrosDTO(Livro livro) {
        LivrosDTO livrosDTO = new LivrosDTO();
        livrosDTO.setId(livro.getId());
        livrosDTO.setTitulo(livro.getTitulo());
        livrosDTO.setAutor(livro.getAutor());
        return livrosDTO;
    }
    private Livro toLivro(LivrosDTO livrosDTO) {
        Livro livro = new Livro();
        livro.setId(livrosDTO.getId());
        livro.setTitulo(livrosDTO.getTitulo());
        livro.setAutor(livrosDTO.getAutor());
        return livro;
    }
    public List<LivrosDTO> listAll(){
        List<Livro> lista = livrosRepository.findAll();
        List<LivrosDTO> listaDTO = new ArrayList<>();

        for(int i=0; i<lista.size(); i++)
            listaDTO.add(this.tolivrosDTO(lista.get(i)));
        return listaDTO;
    }

    public LivrosDTO save(LivrosDTO livrosDTO){
        return tolivrosDTO(livrosRepository.save(toLivro(livrosDTO)));
    }
    public LivrosDTO update(LivrosDTO livrosDTO){
        return tolivrosDTO(livrosRepository.save(toLivro(livrosDTO)));
    }
    public void delete(Long id){
        livrosRepository.deleteById(id);
    }
}