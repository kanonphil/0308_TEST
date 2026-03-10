package com.green.car.car.mapper;

import com.green.car.car.dto.CarDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CarMapper {
  void insertCar(CarDTO carDTO);
  List<CarDTO> selectAllCars();
}
