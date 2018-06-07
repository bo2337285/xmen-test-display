
require.config(config);
define(['jquery'], function ($) {
    //支持unicode的cookie读取/写入器，由MDN网站提供，地址 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    //格式化日期工具,已解决ios时间转换兼容问题
    //dateType 如："y-M-d H:m:s" , "yyyyMMddHHmmss" , "y-M-d" , "H:m"
    var _formatDate = function (date, dateType) {
        //格式个位数成两位数
        function _Add_0(data) {
            if (!data.toString().match(/\d{2}/)) {
                return "0" + data;
            };
            return data;
        }

        if (typeof date == "string") {
            if (date.length > "20") {
                date = date.substring(0, 10);
            } else if (/-/.test(date)) {
                date = date.replace(/-/g, "/");
            } else {
                date = date.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
            }
            date = new Date(date);
        }
        if (typeof date == "number") {
            date = new Date(date);
        }
        var $d = {
            "y+": date.getFullYear(),
            "M+": _Add_0(date.getMonth() + 1),
            "d+": _Add_0(date.getDate()),
            "H+": _Add_0(date.getHours()),
            "m+": _Add_0(date.getMinutes()),
            "s+": _Add_0(date.getSeconds())
        };
        var $a = ["y+", "M+", "d+", "H+", "m+", "s+"];
        for (var i = 0; i < $a.length; i++) {
            var $0 = $a[i];
            var $1 = $d[$a[i]];
            var $reg = new RegExp($0, "i");
            if (/m/i.test($0)) {
                $reg = new RegExp($0);
            }
            dateType = dateType.replace($reg, $1);
        }
        return dateType;
    };
    //存储
    var Store = {
        saveObject: function (key, object) {
            window.localStorage[key] = JSON.stringify(object);
        },
        loadObject: function (key) {
            var objectString = window.localStorage[key];
            return objectString == null ? null : JSON.parse(objectString);
        },
        deleteObject: function (key) {
            window.localStorage[key] = null;
        },
        clear: function () {
            window.localStorage.clear();
        }
    };
    /**
     * 公用ajax请求
     * @param obj
     */
    var postNew = function (obj) {
        var timeout = 30 * 1000; //设置超时时间
        // var loadingMsg = "请稍后...";
        // if (obj.loadingMsg) {
        //     loadingMsg = obj.loadingMsg;
        // }
        var baseUrl = "http://192.168.50.252:8088/api/";
        var urlStr = baseUrl + obj.url;
        var urlArr = urlStr.split("?");
        if (urlArr.length < 2) {
            urlStr += "?";
        } else {
            urlStr += "&";
        }
        //国际化调用
        var lo = "zh";
        if (Util.Store.loadObject('lang')) {
            lo = Util.Store.loadObject('lang');
        }
        urlStr += "lang=" + lo;
        var cb = obj.cb;
        Util.loader.show();
        var options = {
            timeout: timeout,
            async: obj.async || true,
            traditional: true, //防止深度序列化
            url: urlStr,
            type: obj.type || 'GET',
            data: obj.params,
            cache: false,
            dataType: "jsonp", //数据类型为jsonp
            // dataType: "json",
            // contentType: "application/json;charset=utf-8",
            success: function (data, textStatus, jqXHR) {
                Util.loader.hide();
                if (data && data.data) {
                    if (obj.success) {
                        obj.success(data.data, textStatus, jqXHR);
                    }
                } else {
                    alert(data.msg || "请求出错");
                }
            },
            error: function (e, xhr, type) {
                Util.loader.hide();
                if (obj.error) {
                    obj.error(e, xhr, type);
                }
            }
        };
        $.ajax(options);
    };

    return {
        _formatDate: _formatDate,
        Store: Store,
        postNew: postNew
    };
});