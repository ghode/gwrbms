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

import com.African411.dao.CustomerMapper;
import com.African411.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerMapper customerMapper;

    @Override
    public void addCustomer(Customer customer) {
        customerMapper.insert(customer);
    }

    @Override
    public void deleteCustomer(Customer customer) {

        customerMapper.deleteByPrimaryKey(customer.getId());
    }

    @Override
    public void updateCustomer(Customer customer) {
        customerMapper.updateByPrimaryKey(customer);
    }

    @Override
    public Customer selectCustomer(Integer id) {
        return customerMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Customer> queryAll() {
        return customerMapper.selectAll();
    }
}
