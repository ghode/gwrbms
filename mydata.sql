/*
Navicat MySQL Data Transfer

Source Server         : a
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : mydata

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-12-16 17:04:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`
(
    `id`       int(11)                                                 NOT NULL,
    `name`     varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `password` varchar(255)                                            NOT NULL,
    `power`    smallint(10)                                            NOT NULL COMMENT '权限等级',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of account
-- ----------------------------

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`
(
    `id`   int(11)      NOT NULL,
    `name` varchar(255) NOT NULL,
    `tel`  varchar(255) NOT NULL,
    `type` int(11)      NOT NULL COMMENT '客户类型',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of customer
-- ----------------------------

-- ----------------------------
-- Table structure for record_export
-- ----------------------------
DROP TABLE IF EXISTS `record_export`;
CREATE TABLE `record_export`
(
    `id`           int(11)        NOT NULL,
    `ware_id`      int(11)        NOT NULL,
    `warehouse_id` int(11)        NOT NULL,
    `quantity`     decimal(10, 0) NOT NULL,
    `accepted`     tinyint(1)     NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of record_export
-- ----------------------------

-- ----------------------------
-- Table structure for record_import
-- ----------------------------
DROP TABLE IF EXISTS `record_import`;
CREATE TABLE `record_import`
(
    `id`           int(11)        NOT NULL,
    `ware_id`      int(11)        NOT NULL,
    `warehouse_id` int(11)        NOT NULL,
    `quantity`     decimal(10, 0) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of record_import
-- ----------------------------

-- ----------------------------
-- Table structure for retail
-- ----------------------------
DROP TABLE IF EXISTS `retail`;
CREATE TABLE `retail`
(
    `id`         int(20)                                                 NOT NULL,
    `name`       varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
    `price_in`   decimal(10, 0)                                          NOT NULL,
    `price_out1` decimal(10, 0)                                          NOT NULL COMMENT '零售价',
    `price_out2` decimal(10, 0)                                          NOT NULL COMMENT '批发价',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of retail
-- ----------------------------
INSERT INTO `retail`
VALUES ('1', 'aaa', '1', '3', '2');
INSERT INTO `retail`
VALUES ('2', 'bbb', '114', '0', '810');

-- ----------------------------
-- Table structure for ticket
-- ----------------------------
DROP TABLE IF EXISTS `ticket`;
CREATE TABLE `ticket`
(
    `id`           int(11) NOT NULL,
    `ware_id`      int(11) NOT NULL,
    `warehouse_id` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of ticket
-- ----------------------------

-- ----------------------------
-- Table structure for warehouse
-- ----------------------------
DROP TABLE IF EXISTS `warehouse`;
CREATE TABLE `warehouse`
(
    `warehouse_id` int(11)        NOT NULL,
    `id`           int(11)        NOT NULL,
    `quantity`     decimal(10, 0) NOT NULL,
    PRIMARY KEY (`warehouse_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci;

-- ----------------------------
-- Records of warehouse
-- ----------------------------
INSERT INTO `warehouse`
VALUES ('1', '1', '1');
