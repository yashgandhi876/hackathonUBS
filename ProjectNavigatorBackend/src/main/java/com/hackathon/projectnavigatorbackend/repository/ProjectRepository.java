package com.hackathon.projectnavigatorbackend.repository;

import com.hackathon.projectnavigatorbackend.models.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
//    public List<Project> findAll();

//    public List<Project> findAllByTags();

}

