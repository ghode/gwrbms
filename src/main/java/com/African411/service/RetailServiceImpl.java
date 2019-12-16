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
import com.African411.domain.Retail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RetailServiceImpl implements RetailService {
    @Autowired
    private RetailMapper retailMapper;

    /**
     * 添加货物记录
     *
     * @param retail 一批货物
     */
    @Override
    public void addRetail(Retail retail) {
        retailMapper.insert(retail);
    }

    /**
     * 查询货物记录
     *
     * @return 货物记录
     */
    @Override
    public List<Retail> queryAll() {
        return retailMapper.selectAll();
    }

    /**
     * 寻找货物记录
     *
     * @param id 货物ID
     * @return 货物记录
     */
    @Override
    public Retail selectRetail(Integer id) {
        return retailMapper.selectByPrimaryKey(id);
    }

    /**
     * 删除货物记录
     *
     * @param id 货物ID
     */
    @Override
    public void deleteRetail(Integer id) {
        retailMapper.deleteByPrimaryKey(id);
    }

    /**
     * 更新货物记录
     *
     * @param retail 货物记录
     */
    @Override
    public void updateRetail(Retail retail) {
        retailMapper.updateByPrimaryKey(retail);

    }
}
