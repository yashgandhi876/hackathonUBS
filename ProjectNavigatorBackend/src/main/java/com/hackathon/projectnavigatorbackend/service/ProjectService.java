package com.hackathon.projectnavigatorbackend.service;

import com.hackathon.projectnavigatorbackend.models.Project;
import com.hackathon.projectnavigatorbackend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public void addProject(Project project){
        projectRepository.save(project);
    }

    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    public List<Project> getAllProjectsByTagName(String tagName){
        return projectRepository.findByTagName(tagName);
    }

}
