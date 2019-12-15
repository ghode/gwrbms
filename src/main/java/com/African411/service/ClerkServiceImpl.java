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

package com.African411.service;

import com.African411.dao.RetailMapper;
import com.African411.dao.TicketMapper;
import com.African411.domain.Retail;
import com.African411.domain.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClerkServiceImpl implements ClerkService {
    @Autowired
    private TicketMapper ticketMapper;

    @Autowired
    private RetailMapper retailMapper;

    @Override
    public void addTicket(Ticket ticket) {
        ticketMapper.insert(ticket);
    }

    @Override
    public void updateTicket(Ticket ticket) {
        ticketMapper.updateByPrimaryKey(ticket);
    }

    @Override
    public void deleteTicket(Ticket ticket) {
        ticketMapper.deleteByPrimaryKey(ticket.getId());
    }

    @Override
    public void addRetail(Retail retail) {
        retailMapper.insert(retail);
    }
}