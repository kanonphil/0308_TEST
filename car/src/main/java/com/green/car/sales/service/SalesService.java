package com.green.car.sales.service;

import com.green.car.sales.dto.SalesDTO;
import com.green.car.sales.mapper.SalesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesService {
  private final SalesMapper salesMapper;

  public List<SalesDTO> getSalesList() {
    return salesMapper.selectAllSales();
  }

  public void insertSales(SalesDTO salesDTO) {
    salesMapper.insertSales(salesDTO);
  }
}
