package com.example.demo.Questions;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionsDao extends JpaRepository<Questions, Long> {
		Optional<Questions> findById(Integer id);

		@Query(value = "SELECT * FROM questions WHERE thematic_element_en LIKE %?1%", nativeQuery = true)
		List<Questions> findByThematicElementEnContaining(String thematicElement);

//		@Query(value = "SELECT * FROM questions WHERE thematic_element_pl LIKE %?1%", nativeQuery = true)
//		List<Questions> findByThematicElementPlContaining(String thematicElement);
//
//		@Query(value = "SELECT * FROM questions WHERE thematic_element_it LIKE %?1%", nativeQuery = true)
//		List<Questions> findByThematicElementItContaining(String thematicElement);
//
//		@Query(value = "SELECT * FROM questions WHERE thematic_element_gr LIKE %?1%", nativeQuery = true)
//		List<Questions> findByThematicElementGrContaining(String thematicElement);
}
