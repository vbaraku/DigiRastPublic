package com.example.demo.Questions;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionsDao extends JpaRepository<Questions, Long> {
		List<Questions> findByThematicElementEnContaining(String thematicElementEn);
		Optional<Questions> findById(Integer id);
}
