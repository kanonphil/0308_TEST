package com.green.car.sales.mapper;

import com.green.car.sales.dto.SalesDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SalesMapper {
  void insertSales(SalesDTO salesDTO);
  List<SalesDTO> selectAllSales();
}
