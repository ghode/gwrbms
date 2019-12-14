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

import com.African411.domain.Account;
import com.African411.domain.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LoginService {

    /**
     * 获取该账户ID的角色
     *
     * @param id  账户id
     * @param pwd 账户密码
     * @return 该id对应的角色，如果id错误或密码错误，返回null
     * @throws Exception
     */
    Role getRole(String id, String pwd) throws Exception;

    /**
     * 通过ID查找账户
     *
     * @param id ID
     * @return 账户类
     * @throws Exception
     */
    Account queryAccountById(String id) throws Exception;

    /**
     * 通过角色查询一组账户
     *
     * @param role
     * @return
     * @throws Exception
     */
    List<Account> queryAccountByRole(Role role) throws Exception;

    /**
     * 插入新账户
     *
     * @param ac
     * @throws Exception
     */
    void insertAccount(Account ac) throws Exception;

    /**
     * 删除账户
     *
     * @param id
     * @throws Exception
     */
    void deleteAccount(String id) throws Exception;

    /**
     * 通过ID修改账户密码
     *
     * @param id
     * @param newPwd
     * @throws Exception
     */
    void modifyAccountPwdById(String id, String newPwd) throws Exception;

    /**
     * 通过ID修改角色
     *
     * @param id
     * @param newRole
     * @throws Exception
     */
    void modifyAccountRoleById(String id, Role newRole) throws Exception;
}
