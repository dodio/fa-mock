
#一个基于fa 的mock服务器

只需要在data目录放置js 或者json文件即可。


###例子

以请求 GET /user 为例
检测文件顺序为：
/user-get.js
/user.js 
/user-get.json
/user.json
/user/index-get.js
/user/index.js
/user/index-get.json
/user/index.json

如果为js文件，则需要为一个 中间件，请求将交由它处理。

### 至于对接口测试。
这里只是挖了一个坑。

大致想法是：data目录中的 json文件是一个 schema，而文件名路径天然对应服务器接口路径和请求方法。

即可以用来 对上游服务器进行接口测试，又可以对下游请求进行mock