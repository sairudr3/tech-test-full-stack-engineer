package com.hipages.lead.dao;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hipages.lead.model.LeadModel;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Repository
public class InviateDataDao {

    private final static Map<Long, LeadModel> INVITED_MAP =new HashMap();
    private final static Stack<LeadModel> ACCEPTED =new Stack<>();

    private final ResourceLoader resourceLoader;

    @Autowired
    private ObjectMapper objectMapper;

    public InviateDataDao(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @PostConstruct
    public void loadData()
    {
        Resource resource = resourceLoader.getResource("classpath:invited.json");
        try {
            List<LeadModel> leadList = objectMapper.readValue(resource.getInputStream(),
                    new TypeReference<List<LeadModel>>() {}
            );

            Map<Long, LeadModel> leadMap = leadList.stream()
                    .collect(Collectors.toMap(LeadModel::getId, lead -> lead));
            INVITED_MAP.putAll(leadMap);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public List<LeadModel> getInviatedList()
    {
        return INVITED_MAP.values().stream().toList();
    }

    public LeadModel updateInviteData(LeadModel leadModel)
    {
        LeadModel model = INVITED_MAP.get(leadModel.getId());
        model.setAccepted(true);
        INVITED_MAP.remove(leadModel.getId());
        ACCEPTED.add(model);
        return model;
    }


    public Stack<LeadModel> getAcceptedData()
    {
        return ACCEPTED;
    }



}

