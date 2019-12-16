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

import com.African411.dao.AccountMapper;
import com.African411.domain.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountMapper accountMapper;

    @Override
    public void addAccount(Account account) {
        accountMapper.insert(account);
    }

    @Override
    public void updateAccount(Account account) {

        accountMapper.updateByPrimaryKey(account);
    }

    @Override
    public void deleteAccount(Account account) {

        accountMapper.deleteByPrimaryKey(account.getId());
    }

    @Override
    public Account selectAccount(Account account) {
        return null;
    }

    @Override
    public Account selectAccountById(Integer id) {
        return null;
    }
}
