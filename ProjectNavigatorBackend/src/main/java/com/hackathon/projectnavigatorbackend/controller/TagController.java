package com.hackathon.projectnavigatorbackend.controller;

import com.hackathon.projectnavigatorbackend.models.Tag;
import com.hackathon.projectnavigatorbackend.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
public class TagController {
    @Autowired
    private TagService tagService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-tag")
    private HttpStatus saveTag(@RequestBody Tag tag) {
        tagService.addTag(tag);
        return HttpStatus.OK;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-tags")
    private List<Tag> getTags() {
        return tagService.getAllTags();
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get-tags-count")
    private int getTagsCount() {
        return tagService.getAllTags().size();
    }
}
