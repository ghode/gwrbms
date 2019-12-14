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

import java.util.List;

/**
 * 货物数据服务层
 *
 * @author Ghode
 */
public interface RetailService {
    /**
     * 添加货物记录
     *
     * @param retail 一批货物
     */
    void addRetail(Retail retail);

    /**
     * 查询货物记录
     *
     * @return 货物记录
     */
    List<Retail> queryRetail();

    /**
     * 寻找货物记录
     *
     * @param id 货物ID
     * @return 货物记录
     */
    Retail selectRetail(String id);

    /**
     * 删除货物记录
     *
     * @param id 货物ID
     */
    void deleteRetail(String id);

    /**
     * 更新货物记录
     *
     * @param retail 货物记录
     */
    void updateRetail(Retail retail);

}
