console.log的快照输出方案
==========================

由于Chrome开发人员工具中原生的console对象具有跟firefox中表现不一致的问题。

例如表现在使用console.log或console.dir时，点击控制台的箭头会**evaluated just now**，因此给开发人员进行调试带来了困扰。
使用log这个库，可以解决该问题。

## Features

* log.log 表现跟console.log一致
* log.dir 可以打印对象的快照


## Guide

## Changelog

## License
[MIT](http://opensource.org/licenses/MIT)

