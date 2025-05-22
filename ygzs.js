/******************************

*******************************
[rewrite_local]
^http:\/\/xgpiao\.net:6789\/GetExpriteDateSVIP(.?)+ url script-response-body https://raw.githubusercontent.com/sooboy/qx/main/ygzs.js
^http:\/\/xgpiao\.net:6693\/login(.?)+ url script-response-body https://raw.githubusercontent.com/sooboy/qx/main/ygzs.js
^http:\/\/xgpiao\.net:6694\/expritedate(.?)+ url script-response-body https://raw.githubusercontent.com/sooboy/qx/main/ygzs.js
[mitm] 
hostname = xgpiao.net
*******************************/
$done({body: JSON.stringify({
    "ret_status": 1,
    "ret_valide": 1,
    "ret_regtime": "2020-12-02 00:04:53",
    "ret_expritedtime": "2999-08-16 17:15:48",
    "sjs_require_avalibe":1,
    "ret_account":1,
    "ret_note": "还可以使用 大约 9000 个月"
})});