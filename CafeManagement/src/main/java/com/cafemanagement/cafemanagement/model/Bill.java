package com.cafemanagement.cafemanagement.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Calendar;
import java.util.Date;

@Data
@Entity
@Table(name = "bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String contactNumber;
    private String payment;
    private Integer totalAmount;
    private String productDetail;
    @Temporal(TemporalType.TIMESTAMP)
    private Date billDate;

    public Bill() {

    }
    @PrePersist
    protected void onCreate() {
        this.billDate = Calendar.getInstance().getTime();
    }
    @ManyToOne
    @JoinColumn(name = "admin_id")
    @JsonIgnore
    private Admin admin;
}

