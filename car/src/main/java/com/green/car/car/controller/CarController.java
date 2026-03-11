package com.green.car.car.controller;

import com.green.car.car.dto.CarDTO;
import com.green.car.car.service.CarService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
@RequiredArgsConstructor
@Slf4j
public class CarController {
  private final CarService carService;

  @GetMapping("/list")
  public ResponseEntity<?> getCarList() {
    try {
      List<CarDTO> list = carService.getCarList();
      return ResponseEntity.ok(list);
    } catch (Exception e) {
      log.error("차량 목록 조회 실패:", e);
      return ResponseEntity.status(500).body("차량 목록 조회 실패");
    }
  }

  @PostMapping("/insert")
  public ResponseEntity<?> insertCar(@RequestBody CarDTO carDTO) {
    try {
      carService.insertCar(carDTO);
      return ResponseEntity.ok("success");
    } catch (Exception e) {
      log.error("차량 등록 실패:", e);
      return ResponseEntity.status(500).body("차량 등록 실패");
    }
  }
}
