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
	public List<Questions> getAllQuestions(@RequestParam(required = false) String thematicElement, Principal principal) {
		try {
			List<Questions> questions = new ArrayList<Questions>();
			if (thematicElement == null)
				questionsDao.findAll().forEach(questions::add);
			else
				questionsDao.findByThematicElementEnContaining(thematicElement).forEach(questions::add);
//			else if (language.equals("pl"))
//				questionsDao.findByThematicElementPlContaining(thematicElement).forEach(questions::add);
//			else if (language.equals("it"))
//				questionsDao.findByThematicElementItContaining(thematicElement).forEach(questions::add);
//			else if (language.equals("gr"))
//				questionsDao.findByThematicElementGrContaining(thematicElement).forEach(questions::add);
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
