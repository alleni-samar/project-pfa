package com.cafemanagement.cafemanagement.repository;

import com.cafemanagement.cafemanagement.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepo extends JpaRepository<Bill, Long> {

}
