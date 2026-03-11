package com.green.car.sales.controller;

import com.green.car.sales.dto.SalesDTO;
import com.green.car.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
@Slf4j
public class SalesController {
  private final SalesService salesService;

  @GetMapping("/list")
  public ResponseEntity<?> getSalesList() {
    try {
      List<SalesDTO> list = salesService.getSalesList();
      return ResponseEntity.ok(list);
    } catch (Exception e) {
      log.error("판매 목록 조회 실패:", e);
      return ResponseEntity.status(500).body("판매 목록 조회 실패");
    }
  }

  @PostMapping("/insert")
  public ResponseEntity<?> insertSales(@RequestBody SalesDTO salesDTO) {
    try {
      salesService.insertSales(salesDTO);
      return ResponseEntity.ok("success");
    } catch (Exception e) {
      log.error("판매 등록 실패:", e);
      return ResponseEntity.status(500).body("판매 등록 실패");
    }
  }
}
