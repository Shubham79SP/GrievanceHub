package com.app.project.client;

import com.app.dto.GrievanceResponseDTO;
import com.app.dto.WrapperDTO;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import com.app.project.dto.GrievanceStatsDTO;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/**
 * DotNetApiClient is  communicating with the external .NET microservice.
 * It uses Spring's RestTemplate to make HTTP calls and fetch grievance analytics data.
 */
@Component // Marks this as a Spring bean so it can be injected into services
public class DotNetApiClient {

    // RestTemplate is Spring's HTTP client for calling REST APIs
    @Autowired
    private RestTemplate restTemplate;

    /**
     * Calls the .NET Analytics API and retrieves grievance statistics.
     * @return GrievanceStatsDTO object containing analytics data from the .NET service.
     */
    public GrievanceStatsDTO getGrievanceStats() {
        // URL of the .NET API endpoint
        // Make sure to replace localhost & port with the actual running .NET API details
    	   String statusUrl = "http://localhost:5120/api/analytics/status";
    	    String totalUrl = "http://localhost:5120/api/analytics/total";

    	    GrievanceStatsDTO stats = restTemplate.getForObject(statusUrl, GrievanceStatsDTO.class);

    	    Integer total = restTemplate.getForObject(totalUrl, Integer.class);
    	    stats.setTotalGrievances(total != null ? total : 0);

    	    return stats;

        /*
         * restTemplate.getForObject:
         *  - Sends an HTTP GET request to the given URL.
         *  - Converts the JSON response directly into the GrievanceStatsDTO class.
         *  - Automatically maps JSON keys to DTO field names.
         */
//        return restTemplate.getForObject(url, GrievanceStatsDTO.class);
    }
    
    public void syncNewGrievance(WrapperDTO wrapperDTO) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<WrapperDTO> request = new HttpEntity<>(wrapperDTO, headers);
        restTemplate.postForEntity("http://localhost:5120/api/analytics/grievances", request, Void.class);
    }


    
//    Why we use Integer is an object wrapper that can be null if the API call fails or returns no data. The line total != null ? total : 0 ensures
//    that if the API returns null, we safely set total grievances to zero instead of causing a NullPointerException. This adds robustness to your code.
}
