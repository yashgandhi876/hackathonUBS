package com.hackathon.projectnavigatorbackend.controller;

import com.hackathon.projectnavigatorbackend.models.Project;
import com.hackathon.projectnavigatorbackend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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

}
