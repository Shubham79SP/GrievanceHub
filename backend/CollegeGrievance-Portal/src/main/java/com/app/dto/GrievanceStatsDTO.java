package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class GrievanceStatsDTO {
    private int totalGrievances;
    private int pendingCount;
    private int inProgressCount;
    private int resolvedCount;
    private int rejectedCount;
    
    //Must match JSON property names from .NET
}
