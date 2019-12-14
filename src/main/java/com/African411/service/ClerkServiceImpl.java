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

import com.African411.dao.ClerkMapper;
import com.African411.domain.Clerk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClerkServiceImpl implements ClerkService {
    @Autowired
    private ClerkMapper clerkMapper;

    @Override
    public int deleteClerk(Integer id) {
        return clerkMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insertClerk(Clerk clerk) {
        return clerkMapper.insert(clerk);
    }

    @Override
    public Clerk selectClerk(Integer id) {
        return clerkMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Clerk> selectAll() {
        return clerkMapper.selectAll();
    }

    @Override
    public int updateClerk(Clerk clerk) {
        return clerkMapper.updateByPrimaryKey(clerk);
    }
}
