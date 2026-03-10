package com.green.car.sales.controller;

import com.green.car.sales.dto.SalesDTO;
import com.green.car.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SalesController {
  private final SalesService salesService;

  @GetMapping("/list")
  public ResponseEntity<?> getSalesList() {
    try {
      List<SalesDTO> list = salesService.getSalesList();
      return ResponseEntity.ok(list);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(500).body("판매 목록 조회 실패");
    }
  }

  @PostMapping("/insert")
  public ResponseEntity<?> insertSales(@RequestBody SalesDTO salesDTO) {
    try {
      salesService.insertSales(salesDTO);
      return ResponseEntity.ok("success");
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(500).body("판매 등록 실패");
    }
  }
}
