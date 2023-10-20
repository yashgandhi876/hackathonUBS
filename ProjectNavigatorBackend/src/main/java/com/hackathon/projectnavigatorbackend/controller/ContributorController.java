package com.hackathon.projectnavigatorbackend.controller;

import com.hackathon.projectnavigatorbackend.models.Contributor;
import com.hackathon.projectnavigatorbackend.models.Tag;
import com.hackathon.projectnavigatorbackend.service.ContributorService;
import com.hackathon.projectnavigatorbackend.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
public class ContributorController {
    @Autowired
    private ContributorService contributorService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-contributor")
    private HttpStatus saveContributor(@RequestBody Contributor contributor){
        contributorService.addContributor(contributor);
        return HttpStatus.OK;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-contributors")
    private List<Contributor> getContributors(){
        return contributorService.getAllContributors();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-contributor/{email}")
    private Contributor getContributors(@PathVariable String email){
        return contributorService.getContributorByEmail(email);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-contributors-count")
    private int getContributorsCount(){
        return contributorService.getAllContributors().size();
    }
}