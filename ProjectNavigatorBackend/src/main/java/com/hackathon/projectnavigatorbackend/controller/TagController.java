package com.hackathon.projectnavigatorbackend.controller;

import com.hackathon.projectnavigatorbackend.models.Tag;
import com.hackathon.projectnavigatorbackend.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
public class TagController {
    @Autowired
    private TagService tagService;

    @PostMapping("/add-tag")
    private HttpStatus saveTag(@RequestBody Tag tag) {
        tagService.addTag(tag);
        return HttpStatus.OK;
    }

    @GetMapping("/get-tags")
    private List<Tag> getTags() {
        return tagService.getAllTags();
    }
}
