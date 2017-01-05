# sfpay
An async/await version of sfpay.

## Installation
```
npm install sfpay
```

## Usage

扫码支付
```js
import SFPay from 'sfpay';

const sfPay = new SFPay({
    key: 'xxxxxxxxxxxxxxxxxxxx',
    spId: 'xxxx',
    muchId: 'xxxxxxxxxxxxxxxxx'
});

function async sPay() {
    const result = await sfPay.sPay({
        out_trade_no: `20170104${Math.random().toString().substr(2, 10)}`,
        body: '扫码支付测试',
        total_fee: 100,
        mch_create_ip: '127.0.0.1',
        notify_url: 'http://127.0.0.1/order/api/notify',
        time_start: '201612310629',
        time_expire: '201612310829',
        goods_tag: 'mj',
        product_id: 'qr1001'
    });
    console.log(`result:${JSON.stringify(result)}`);
}
```

订单查询
```js
function async tradeQry() {
    const result = await sfPay.tradeQry({ out_trade_no: "xxxxxx" });
    console.log(`result:${JSON.stringify(result)}`);
}
```

退款
```js
function async rfd() {
    const result = await sfPay.rfd({
        out_trade_no: 'xxxxxxxxxxxxxxxxxxxx',
        out_refund_no: 'xxxxxxxxxxxxxxxxxxxx',
        total_fee: 100,
        refund_fee: 100,
        refund_channel: 'BALANCE'
    });
    console.log(`result:${JSON.stringify(result)}`);
}
```

退款查询
```js
function async rfdq() {
    const result = await sfPay.rfdq({
        out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
    });
    console.log(`result:${JSON.stringify(result)}`);
}
```


### 条码支付

条码支付
```js
function async mpay() {
    const result = await sfPay.mpay({
        out_trade_no: `20170103${Math.random().toString().substr(2, 10)}`,
        body: '测试条码支付',
        total_fee: 1,
        mch_create_ip: '127.0.0.1',
        auth_code: 'xxxxxx',
        time_start: '20170103104500',
        time_expire: '20170103160000',
        goods_tag: 'coupon'
    });
    console.log(`result:${JSON.stringify(result)}`);
}
```


### 公众号支付 (JS API)

公众号支付
```js
function async jPay() {
    const result = await sfPay.jPay({
        out_trade_no: `20170103${Math.random().toString().substr(2, 10)}`,
        wx_appid: 'xxxxxxxxxxxxxxxx',
        openid: 'xxxxxxxxxxxxxxxxxxxxx',
        body: '测试jsAPI支付',
        total_fee: 100,
        mch_create_ip: '127.0.0.1',
        notify_url: 'http://xxxxxxxxxxxxx/order/api/notify',
        goods_tag: 'coupon'
    });
    console.log(`result:${JSON.stringify(result)}`);
}
```

网页端调起支付API
```js
function onBridgeReady(){
   WeixinJSBridge.invoke(
       'getBrandWCPayRequest', {
           "appId" ： "wx2421b1c4370ec43b",     //公众号名称，由商户传入
           "timeStamp"：" 1395712654",         //时间戳，自1970年以来的秒数
           "nonceStr" ： "e61463f8efa94090b1f366cccfbbb444", //随机串
           "package" ： "prepay_id=u802345jgfjsdfgsdg888",
           "signType" ： "MD5",         //微信签名方式：
           "paySign" ： "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
       },
       function(res){
           if(res.err_msg == "get_brand_wcpay_request：ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
       }
   );
}
if (typeof WeixinJSBridge == "undefined"){
   if( document.addEventListener ){
       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
   }else if (document.attachEvent){
       document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
   }
}else{
   onBridgeReady();
}
```