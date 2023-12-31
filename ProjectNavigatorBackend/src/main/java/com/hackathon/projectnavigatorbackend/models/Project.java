package com.hackathon.projectnavigatorbackend.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
public class Project {
    String name;
    String desc;
    List<Tag> tags;
    List<Contributor> contributors;
    String repoLink;
    String dl;
    String owner;
}
