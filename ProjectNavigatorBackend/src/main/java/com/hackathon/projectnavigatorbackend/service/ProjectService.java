package com.hackathon.projectnavigatorbackend.service;

import com.hackathon.projectnavigatorbackend.models.Project;
import com.hackathon.projectnavigatorbackend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public void addProject(Project project){
        projectRepository.save(project);
    }
}
