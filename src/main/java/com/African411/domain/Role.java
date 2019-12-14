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

package com.African411.domain;

import java.util.HashMap;
import java.util.Map;

/**
 *
 */
public enum Role {

    ADMIN("ADMIN", "管理员"),
    CLERK("CLERK", "店员"),
    MANAGER("MANAGER", "经理"),
    SHOPKEEPER("SHOPKEEPER", "店长");

    private static Map<String, Role> roleMap = new HashMap<String, Role>();

    //存储字符串与枚举类型的对应关系
    static {
        for (Role role : Role.values()) {
            roleMap.put(role.getKey(), role);
        }
    }

    private String key;
    private String value;

    private Role(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public static Role getRoleByKey(String key) {
        return roleMap.get(key);
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
