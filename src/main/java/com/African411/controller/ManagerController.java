/*
 * Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
 * of Technology. Users are free to copy, change or remove. Because no one
 * will read this. Only I know is that Repeaters are the best of the world.
 * Only I know is that Repeaters are the best of the world. Only I know is
 * that Repeaters are the best of the world. Maybe a long copyright text
 * seems professional. Therefore this text will be a bit lengthy. However,
 * the author seems to be afraid that one day, this text may be uploaded to
 * business projects. That is the time you can contact with author via email
 * ghode@cirnocraft.im or directly ignore this, which will be interesting.
 */

package com.African411.controller;

import com.African411.domain.*;
import com.African411.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/manager")
public class ManagerController {

    @Autowired
    private TicketService ticketService;
    @Autowired
    private RetailService retailService;
    @Autowired
    private WarehouseService warehouseService;
    @Autowired
    private RecordExportService recordExportService;
    @Autowired
    private CustomerService customerService;

    @PostMapping("/add_ticket")
    @ResponseBody
    public String addTicket(@RequestBody Ticket ticket) {
        ticketService.addTicket(ticket);
        return "success";
    }

    @PostMapping("/modify_ticket")
    @ResponseBody
    public String modifyTicket(Integer id, Integer warehouseId,
                               Integer wareId) {
        System.out.println("Receiving modify ticket info request from " + id);
        Ticket ticket = ticketService.selectTicket(id);
        if (ticket != null) {
            ticket.setWareId(wareId);
            ticket.setWarehouseId(warehouseId);
            ticketService.updateTicket(ticket);
            return "success";
        } else {
            return "error";
        }
    }

    @PostMapping("/delete_ticket")
    @ResponseBody
    public String deleteTicket(@RequestBody Ticket ticket) {
        if (ticketService.selectTicket(ticket.getId()) != null) {
            ticketService.deleteTicket(ticket);
            return "success";
        } else {
            return "error";
        }
    }

    @PostMapping("/add_retail")
    @ResponseBody
    public String addRetail(Warehouse warehouse) {
        warehouseService.addWarehouse(warehouse);
        return "success";
    }

    @PostMapping("/wholesale")
    @ResponseBody
    public String wholesale(Integer id, Integer wareId, Long quantity) {
        Warehouse warehouse = warehouseService.selectWarehouse(id, wareId);
        if (warehouse != null) {
            warehouse.setQuantity(warehouse.getQuantity() - quantity);
            warehouseService.updateWarehouse(warehouse);
            return "success";
        }
        return "error";
    }

    @PostMapping("accept_record")
    @ResponseBody
    public String acceptRecord(@RequestBody RecordExport recordExport) {
        if (recordExportService.selectRecordExport(recordExport.getId()) != null) {
            recordExport.setAccepted(true);
            recordExportService.updateRecordExport(recordExport);
            return "success";

        }
        return "error";
    }

    @PostMapping("refund")
    @ResponseBody
    public String refund(@RequestBody RecordExport recordExport) {
        if (recordExportService.selectRecordExport(recordExport.getId()) != null) {
            recordExportService.deleteRecordExport(recordExport);
            return "success";
        }
        return "error";
    }

    @PostMapping("get_all_customer")
    @ResponseBody
    public List<Customer> getAllCustomer() {
        return customerService.queryAll();
    }

    @PostMapping("get_all_retail")
    @ResponseBody
    public List<Retail> getAllRetail() {
        return retailService.queryAll();
    }

    @PostMapping("get_all_warehouse")
    @ResponseBody
    public List<Warehouse> getAllWarehouse() {
        return warehouseService.queryAll();
    }

    public String transfer(Integer src, Integer dst, Integer wareId,
                           Long quantity) {
        Warehouse s = warehouseService.selectWarehouse(src, wareId);
        Warehouse t = warehouseService.selectWarehouse(dst, wareId);
        if (s != null && t != null) {
            s.setQuantity(s.getQuantity() - quantity);
            t.setQuantity(t.getQuantity() + quantity);
            warehouseService.updateWarehouse(s);
            warehouseService.updateWarehouse(t);
            return "success";
        }
        return "error";
    }
}
