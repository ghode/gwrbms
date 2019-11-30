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

import com.African411.domain.Retail;
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
    private StudentService studentService;

    @Autowired
    private ExamForAdminService EFA;

    @PostMapping(value = "/add-retail")
    @ResponseBody
    public String addStudent(@RequestBody Retail retail) {
        if (s.getStudentSex().equals("male")) s.setStudentSex("male");
        if (s.getStudentSex().equals("female")) s.setStudentSex("female");
        studentService.insertStudent(s);
        return "";
    }

    @PostMapping(value = "/addteacher")
    @ResponseBody
    public String addTeacher(@RequestBody Teacher t) {
        if (t.getTeacherSex().equals("male")) t.setTeacherSex("male");
        if (t.getTeacherSex().equals("female")) t.setTeacherSex("female");
        teacherService.insertTeacher(t);
        return "";
    }


    @PostMapping(value = "/exam/addexam")
    @ResponseBody
    public void addExam(@RequestBody Exams e) {
        EFA.insertExam(e);
    }
}
