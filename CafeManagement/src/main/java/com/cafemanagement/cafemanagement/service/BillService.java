package com.cafemanagement.cafemanagement.service;

import com.cafemanagement.cafemanagement.model.Bill;
import java.util.List;

public interface BillService {
    Bill createBill(Bill bill);
    Bill getBillById(Long id);
    List<Bill> getAllBills();
    void deleteBill(Long id);

}

