package com.hackathon.projectnavigatorbackend.repository;

import com.hackathon.projectnavigatorbackend.models.Contributor;
import com.hackathon.projectnavigatorbackend.models.Tag;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContributorRepository extends MongoRepository<Contributor, String> {

    public List<Contributor> findAll();
    public Contributor findByEmail(String email);
}