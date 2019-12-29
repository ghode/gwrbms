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

import com.African411.domain.Account;
import com.African411.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @RequestMapping("/show_all.do")
    public ModelAndView showAll() {
        List<Account> res = accountService.queryAll();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("account_list", res);
        modelAndView.setViewName("all_account");
        return modelAndView;
    }

    @RequestMapping("/add_account.do")
    public ModelAndView addAccount(Account account) {
        accountService.addAccount(account);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("add_account");
        return modelAndView;
    }

    @RequestMapping("/delete.do")
    public ModelAndView deleteAccount(Account account) {
        accountService.deleteAccount(account);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("delete_account");
        return modelAndView;
    }

    @RequestMapping("/delete.do")
    public ModelAndView deleteAccount(Integer id) {
        accountService.deleteAccountById(id);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("delete_account");
        return modelAndView;
    }

    @RequestMapping("/update.do")
    public ModelAndView updateAccount(Account account) {
        accountService.updateAccount(account);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("update_account");
        return modelAndView;
    }
}
