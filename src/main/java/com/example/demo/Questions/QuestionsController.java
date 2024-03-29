package com.example.demo.Questions;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/questions")
public class QuestionsController {
	
	@Autowired
	QuestionsDao questionsDao;
	
	@GetMapping
	public List<Questions> getAllQuestions(@RequestParam(required = false) String thematicElementEn, Principal principal) {
		try {
			List<Questions> questions = new ArrayList<Questions>();
			if (thematicElementEn == null)
				questionsDao.findAll().forEach(questions::add);
			else
				questionsDao.findByThematicElementEnContaining(thematicElementEn).forEach(questions::add);
			if (questions.isEmpty()) {
				return null;
			}
			return questions;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	
}
