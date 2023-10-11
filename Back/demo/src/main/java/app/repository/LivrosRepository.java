package app.repository;

import app.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivrosRepository extends JpaRepository<Livro, Long> {
}
