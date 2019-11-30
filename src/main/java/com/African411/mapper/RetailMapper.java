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

package com.African411.mapper;

import com.African411.domain.Retail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RetailMapper {
    public void addRetail(Retail retail);

    public List<Retail> queryRetail();

    public List<Retail> selectRetail(String id);

    public void deleteRetail(String id);

    public void updateRetail(Retail retail);
}
