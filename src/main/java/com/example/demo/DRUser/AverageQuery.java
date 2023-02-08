package com.example.demo.DRUser;

public class AverageQuery {
    private Double score;
    private String thematicElementEn;

    public AverageQuery(Double score, String thematicElementEn) {
        setScore(score);
        this.thematicElementEn = thematicElementEn;
    }

    public AverageQuery(String thematicElementEn) {
        setScore(0d);
        this.thematicElementEn = thematicElementEn;
    }

    public String getId() {
        return thematicElementEn;
    }

    public void setId(String thematicElementEn) {
        this.thematicElementEn = thematicElementEn;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        if(score == null) this.score = 0d;
        else this.score = score;
    }
}
