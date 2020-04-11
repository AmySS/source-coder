# 源代码统计 - node 脚本

> 用来统计项目的源码信息，一版申请软著时用到。

## 特性

- 自定过滤带有如下后缀的文件：json\svg\png

## 输出

会在当前目录下生成 `out/文件名-源码字符总数.txt`文本，文本内容为所有源码。

## 使用

```shell
node source-coder ${项目目录} ${输出文件名}

```

示例：

```
node source-coder myproject/src result
```

## TODO

- 文件过滤类型支持自定义
- 支持一次指定多个文件目录
