package com.hackathon.projectnavigatorbackend.controller;

import com.hackathon.projectnavigatorbackend.models.Project;
import com.hackathon.projectnavigatorbackend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/add-project")
    private HttpStatus saveProject(@RequestBody Project project){
            projectService.addProject(project);
            return HttpStatus.OK;
    }

    @GetMapping("/get-projects")
    private List<Project> getProjects(){
        return projectService.getAllProjects();
    }

    @GetMapping("/get-projects/{tagName}")
    private List<Project> getProjectsByTagName(@PathVariable String tagName){
        return projectService.getAllProjectsByTagName(tagName);
    }
}
