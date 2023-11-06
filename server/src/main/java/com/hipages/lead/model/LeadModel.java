package com.hipages.lead.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class LeadModel {
    @JsonProperty("id")
    private long id;

    @JsonProperty("contactFirstName")
    private String contactFirstName;

    @JsonProperty("dateCreated")
    private String dateCreated;

    @JsonProperty("suburb")
    private String suburb;

    @JsonProperty("location")
    private String location;

    @JsonProperty("category")
    private String category;

    @JsonProperty("description")
    private String description;

    @JsonProperty("price")
    private String price;

    @JsonProperty("contactFullName")
    private String contactFullName;

    @JsonProperty("contactno")
    private String contactno;

    @JsonProperty("email")
    private String email;

    @JsonProperty("leadType")
    private String leadType;

    @JsonProperty("isAccepted")
    private boolean isAccepted;


    @JsonProperty("jobDescription")
    private String jobDescription;

}

