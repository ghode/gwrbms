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

import com.African411.domain.Ticket;
import com.African411.domain.Warehouse;
import com.African411.service.TicketService;
import com.African411.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/clerk")
public class ClerkController {

    @Autowired
    private TicketService ticketService;

    @Autowired
    private WarehouseService warehouseService;

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
}
