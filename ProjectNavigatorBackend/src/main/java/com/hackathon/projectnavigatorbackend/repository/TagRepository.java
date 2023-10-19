package com.hackathon.projectnavigatorbackend.repository;

import com.hackathon.projectnavigatorbackend.models.Tag;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends MongoRepository<Tag, String> {

    public List<Tag> findAll();

}