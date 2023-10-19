package com.hackathon.projectnavigatorbackend.service;

import com.hackathon.projectnavigatorbackend.models.Contributor;
import com.hackathon.projectnavigatorbackend.models.Tag;
import com.hackathon.projectnavigatorbackend.repository.ContributorRepository;
import com.hackathon.projectnavigatorbackend.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContributorService {
    @Autowired
    private ContributorRepository contributorRepository;

    public void addContributor(Contributor contributor){
        contributorRepository.save(contributor);
    }

    public List<Contributor> getAllContributors(){
        return contributorRepository.findAll();
    }

    public Contributor getContributorByEmail(String email){
        return contributorRepository.findByEmail(email);
    }
}