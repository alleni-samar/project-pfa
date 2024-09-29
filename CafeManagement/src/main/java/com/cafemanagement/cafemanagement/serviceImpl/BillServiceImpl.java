package com.cafemanagement.cafemanagement.serviceImpl;

import com.cafemanagement.cafemanagement.model.Bill;
import com.cafemanagement.cafemanagement.repository.BillRepo;
import com.cafemanagement.cafemanagement.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    private BillRepo billRepository;

    @Override
    public Bill createBill(Bill bill) {
        return billRepository.save(bill);
    }

    @Override
    public Bill getBillById(Long id) {
        return billRepository.findById(id).orElse(null);
    }

    @Override
    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    @Override
    public void deleteBill(Long id) {
        billRepository.deleteById(id);
    }

}

