package com.green.car.car.service;

import com.green.car.car.dto.CarDTO;
import com.green.car.car.mapper.CarMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {
  private final CarMapper carMapper;

  public List<CarDTO> getCarList() {
    return carMapper.selectAllCars();
  }

  public void insertCar(CarDTO carDTO) {
    carMapper.insertCar(carDTO);
  }
}
