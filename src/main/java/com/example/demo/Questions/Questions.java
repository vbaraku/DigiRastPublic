package com.example.demo.Questions;

import com.example.demo.Answers.Answers;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "questions")
public class Questions {
	
	@Id
	@Column(name = "Id")
	private Integer id;
	
	@Column(name = "thematic_element_en", length = 1000)
	private String thematicElementEn;
	
	@Column(name = "sub_element_en", length = 2000)
	private String subElementEn;
	
	
	@Column(name = "Statement_en", length = 1000)
	private String statementEn;
	
	@Column(name = "Explanation_en", length = 5500)
	private String explanationEn;

	@Column(name = "thematic_element_pl", length = 1000)
	private String thematicElementPl;

	@Column(name = "sub_element_pl", length = 2000)
	private String subElementPl;


	@Column(name = "Statement_pl", length = 1000)
	private String statementPl;

	@Column(name = "Explanation_pl", length = 5500)
	private String explanationPl;

	@Column(name = "thematic_element_it", length = 1000)
	private String thematicElementIt;

	@Column(name = "sub_element_it", length = 2000)
	private String subElementIt;


	@Column(name = "Statement_it", length = 1000)
	private String statementIt;

	@Column(name = "Explanation_it", length = 5500)
	private String explanationIt;

	@Column(name = "thematic_element_gr", length = 1000)
	private String thematicElementGr;

	@Column(name = "sub_element_gr", length = 2000)
	private String subElementGr;


	@Column(name = "Statement_gr", length = 1000)
	private String statementGr;

	@Column(name = "Explanation_gr", length = 5500)
	private String explanationGr;

	@OneToMany(mappedBy = "question", fetch = FetchType.LAZY,
			cascade = CascadeType.ALL)
	private Set<Answers> answers;
	public Questions(){}
	
	public Questions(Integer id, String thematicElementEn, String subElementEn, String statementEn, String explanationEn) {
		super();
		this.id = id;
		this.thematicElementEn = thematicElementEn;
		this.subElementEn = subElementEn;
		this.statementEn = statementEn;
		this.explanationEn = explanationEn;
	}

	public Questions(Integer id, String thematicElementEn, String subElementEn, String statementEn, String explanationEn, String thematicElementPl, String subElementPl, String statementPl, String explanationPl, String thematicElementIt, String subElementIt, String statementIt, String explanationIt, String thematicElementGr, String subElementGr, String statementGr, String explanationGr, Set<Answers> answers) {
		this.id = id;
		this.thematicElementEn = thematicElementEn;
		this.subElementEn = subElementEn;
		this.statementEn = statementEn;
		this.explanationEn = explanationEn;
		this.thematicElementPl = thematicElementPl;
		this.subElementPl = subElementPl;
		this.statementPl = statementPl;
		this.explanationPl = explanationPl;
		this.thematicElementIt = thematicElementIt;
		this.subElementIt = subElementIt;
		this.statementIt = statementIt;
		this.explanationIt = explanationIt;
		this.thematicElementGr = thematicElementGr;
		this.subElementGr = subElementGr;
		this.statementGr = statementGr;
		this.explanationGr = explanationGr;
		this.answers = answers;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getThematicElementEn() {
		return thematicElementEn;
	}

	public void setThematicElementEn(String thematicElement) {
		this.thematicElementEn = thematicElement;
	}

	public String getSubElementEn() {
		return subElementEn;
	}

	public void setSubElementEn(String subElement) {
		this.subElementEn = subElement;
	}

	public String getStatementEn() {
		return statementEn;
	}

	public void setStatementEn(String statement) {
		this.statementEn = statement;
	}

	public String getExplanationEn() {
		return explanationEn;
	}

	public void setExplanationEn(String explanation) {
		this.explanationEn = explanation;
	}

	public String getThematicElementPl() {
		return thematicElementPl;
	}

	public void setThematicElementPl(String thematicElementPl) {
		this.thematicElementPl = thematicElementPl;
	}

	public String getSubElementPl() {
		return subElementPl;
	}

	public void setSubElementPl(String subElementPl) {
		this.subElementPl = subElementPl;
	}

	public String getStatementPl() {
		return statementPl;
	}

	public void setStatementPl(String statementPl) {
		this.statementPl = statementPl;
	}

	public String getExplanationPl() {
		return explanationPl;
	}

	public void setExplanationPl(String explanationPl) {
		this.explanationPl = explanationPl;
	}

	public String getThematicElementIt() {
		return thematicElementIt;
	}

	public void setThematicElementIt(String thematicElementIt) {
		this.thematicElementIt = thematicElementIt;
	}

	public String getSubElementIt() {
		return subElementIt;
	}

	public void setSubElementIt(String subElementIt) {
		this.subElementIt = subElementIt;
	}

	public String getStatementIt() {
		return statementIt;
	}

	public void setStatementIt(String statementIt) {
		this.statementIt = statementIt;
	}

	public String getExplanationIt() {
		return explanationIt;
	}

	public void setExplanationIt(String explanationIt) {
		this.explanationIt = explanationIt;
	}

	public String getThematicElementGr() {
		return thematicElementGr;
	}

	public void setThematicElementGr(String thematicElementGr) {
		this.thematicElementGr = thematicElementGr;
	}

	public String getSubElementGr() {
		return subElementGr;
	}

	public void setSubElementGr(String subElementGr) {
		this.subElementGr = subElementGr;
	}

	public String getStatementGr() {
		return statementGr;
	}

	public void setStatementGr(String statementGr) {
		this.statementGr = statementGr;
	}

	public String getExplanationGr() {
		return explanationGr;
	}

	public void setExplanationGr(String explanationGr) {
		this.explanationGr = explanationGr;
	}
}
