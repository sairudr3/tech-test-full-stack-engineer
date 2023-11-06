package com.hipages.lead.rest;

import com.hipages.lead.model.LeadModel;
import com.hipages.lead.service.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Stack;

@RestController
@CrossOrigin
public class LeadsController {


    @Autowired
    private LeadService leadService;


    @GetMapping("/inviteData")
    public ResponseEntity<List<?>> getInvitedData()
    {
        return ResponseEntity.ok(leadService.getInviatedList());
    }

    @PostMapping("/inviteData")
    public ResponseEntity<LeadModel> acceptInvitedData(@RequestBody LeadModel leadModel)
    {
        return ResponseEntity.ok(leadService.updateInviteData(leadModel));
    }

    @GetMapping("/acceptedData")
    public ResponseEntity<List<?>> getAcceptedData()
    {
        return ResponseEntity.ok(leadService.getAcceptedData());
    }
}
