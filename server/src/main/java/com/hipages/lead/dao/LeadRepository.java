package com.hipages.lead.dao;

import com.hipages.lead.model.LeadModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.util.List;

@Repository
public class LeadRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LeadRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<LeadModel> getAllData(boolean isAccepted) {
        String sql = "SELECT * FROM leads where isAccepted=?";
        return jdbcTemplate.query(sql, new Object[]{isAccepted?1:0},(rs, rowNum) -> {
            LeadModel lead = new LeadModel();
            lead.setId(rs.getLong("id"));
            lead.setContactFirstName(rs.getString("contactFirstName"));
            lead.setDateCreated(rs.getString("dateCreated"));
            lead.setSuburb(rs.getString("suburb"));
            lead.setLocation(rs.getString("location"));
            lead.setCategory(rs.getString("category"));
            lead.setDescription(rs.getString("description"));
            lead.setPrice(rs.getString("price"));
            lead.setContactFullName(rs.getString("contactFullName"));
            lead.setContactno(rs.getString("contactno"));
            lead.setEmail(rs.getString("email"));
            lead.setLeadType(rs.getString("leadType"));
            lead.setAccepted(rs.getBoolean("isAccepted"));
            lead.setJobDescription(rs.getString("jobDescription"));
            return lead;
        });
    }

    public int updateLeadById(long id) {
        String sql = "UPDATE leads SET isAccepted = true WHERE id = ?";

        return jdbcTemplate.update(connection -> {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setLong(1, id);
            return preparedStatement;
        });
    }

}

