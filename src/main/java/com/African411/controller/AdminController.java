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

import com.African411.service.RetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {

    @Autowired
    private RetailService retailService;

    @PostMapping(value = "/add-retail")
    @ResponseBody
    public String addRetail(@RequestBody Retail retail) {
//        if (retail.getStudentSex().equals("male")) s.setStudentSex("male");
//        if (retail.getStudentSex().equals("female")) s.setStudentSex("female");
//        studentService.insertStudent(s);
        return "";
    }
}
