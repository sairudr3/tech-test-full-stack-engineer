package com.hipages.lead.service;

import com.hipages.lead.dao.InviateDataDao;
import com.hipages.lead.dao.LeadRepository;
import com.hipages.lead.model.LeadModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Stack;

@Service
public class LeadService {

    private final InviateDataDao inviateDataDao;

    private final LeadRepository leadRepository;

    public LeadService(InviateDataDao inviateDataDao, LeadRepository leadRepository) {
        this.inviateDataDao = inviateDataDao;
        this.leadRepository = leadRepository;
    }

    public List<LeadModel> getInviatedList()
    {
        return leadRepository.getAllData(false);
    }

    public List<LeadModel> getAcceptedData()
    {
        return leadRepository.getAllData(true);
    }

    public LeadModel updateInviteData(LeadModel leadModel)
    {
        leadRepository.updateLeadById(leadModel.getId());
        return leadModel;
    }




}
