package com.hackathon.projectnavigatorbackend.service;

import com.hackathon.projectnavigatorbackend.models.Tag;
import com.hackathon.projectnavigatorbackend.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;

    public void addTag(Tag tag) {
        tagRepository.save(tag);
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }
}