package com.green.car.sales.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SalesDTO {
  private int saleNo;
  private String buyerName;
  private String buyerPhone;
  private String color;
  @JsonFormat(pattern = "yyyy.MM.dd HH:mm")
  private LocalDateTime saleDate;

  private int modelNo;
  private String modelName;
  private int price;
}
