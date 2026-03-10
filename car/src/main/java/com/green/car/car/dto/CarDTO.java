package com.green.car.car.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {
  private int modelNo;
  private String modelName;
  private int price;
  private String manufacturer;
}

