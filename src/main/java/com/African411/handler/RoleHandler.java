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

package com.African411.handler;

import com.African411.domain.Role;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RoleHandler extends BaseTypeHandler<Role> {
    /**
     * 用于通过字段名获取字段数据时，如何把数据库类型转换为对应的Java类型
     *
     * @param resultSet  结果集
     * @param columnName Colunm name, when configuration <code>useColumnLabel</code> is <code>false</code>
     */
    @Override
    public Role getNullableResult(ResultSet resultSet, String columnName) throws SQLException {
        String key = resultSet.getString(columnName);
        if (resultSet.wasNull()) {
            return null;
        } else {
            return Role.getRoleByKey(key);
        }
    }

    /**
     * 定义通过字段索引获取字段数据时，把数据库类型转为Java类型
     *
     * @param resultSet
     * @param columnIndex
     * @return
     * @throws SQLException
     */
    @Override
    public Role getNullableResult(ResultSet resultSet, int columnIndex) throws SQLException {
        String key = resultSet.getString(columnIndex);
        if (resultSet.wasNull()) {
            return null;
        } else {
            return Role.getRoleByKey(key);
        }
    }

    /**
     * 定义调用存储过程后，把数据库类型转换为Java类型
     *
     * @param callableStatement
     * @param columnIndex
     * @return
     * @throws SQLException
     */
    @Override
    public Role getNullableResult(CallableStatement callableStatement, int columnIndex) throws SQLException {
        String key = callableStatement.getString(columnIndex);
        if (callableStatement.wasNull()) {
            return null;
        } else {
            return Role.getRoleByKey(key);
        }
    }

    /**
     * 设置把Java类型转为对应数据库类型
     *
     * @param preparedStatement
     * @param i
     * @param parameter
     * @param jdbcType
     * @throws SQLException
     */
    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, Role parameter, JdbcType jdbcType) throws SQLException {
        preparedStatement.setString(i, parameter.getKey());
    }
}
