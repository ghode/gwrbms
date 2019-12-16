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

import com.African411.dao.RecordExportMapper;
import com.African411.domain.RecordExport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordExportServiceImpl implements RecordExportService {
    @Autowired
    RecordExportMapper recordExportMapper;

    @Override
    public void addRecordExport(RecordExport recordExport) {

        recordExportMapper.insert(recordExport);
    }

    @Override
    public void deleteRecordExport(RecordExport recordExport) {

        recordExportMapper.deleteByPrimaryKey(recordExport.getId());
    }

    @Override
    public void updateRecordExport(RecordExport recordExport) {
        recordExportMapper.updateByPrimaryKey(recordExport);
    }

    @Override
    public RecordExport selectRecordExport(Integer id) {
        return recordExportMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<RecordExport> queryAll() {
        return recordExportMapper.selectAll();
    }
}
