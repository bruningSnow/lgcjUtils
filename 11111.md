# lgcjUtils

```
个人工作日常积累方法集。
欢迎各位大佬批评指正！！！
```

# 方法介绍

## arrayFilterRepeat

```
用于过滤数组【不限制数组维度】中重复值（包含引用类型数据的去重）
```

### 入参

- list 需过滤数组
- isFlat 是否将数组维度拉平后进行去重过滤
- cb 对已操作后的数组中单元的回调函数

### 出参

```
已去重后的数组
```

## arrayFlat

```
用于拉平多维数组
```

### 入参

- list 需拉片数组
- cb 对已操作后的数组中单元的回调函数

### 出参

```
已拉平后的数组
```

## checkDataType

```
用于检测数据类型是否匹配
```

### 入参

- data 需检测数据
- type 需检测的数据类型

```
'String'
  | 'Number'
  | 'Boolean'
  | 'Undefined'
  | 'Null'
  | 'Object'
  | 'Function'
  | 'Array'
  | 'Date'
  | 'RegExp'
  | 'Map'
  | 'Set'
```

### 出参

```
true/false
```
