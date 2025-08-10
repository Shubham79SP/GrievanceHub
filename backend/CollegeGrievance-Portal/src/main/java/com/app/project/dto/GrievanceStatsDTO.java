package com.app.project.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GrievanceStatsDTO {

    @JsonProperty("Open")
    private int openGrievances;

    @JsonProperty("Pending")
    private int pendingGrievances;

    @JsonProperty("Resolved")
    private int closedGrievances;  

    @JsonProperty("TotalGrievances")
    private int totalGrievances;
}
