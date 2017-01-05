'use strict';

var _sfpay = require('../sfpay');

var _sfpay2 = _interopRequireDefault(_sfpay);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by TrevionHuang on 2017/1/1 0001.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


describe('sfpay', function () {
	describe('sPay', function () {
		it('sPay should ok', _asyncToGenerator(function* () {
			let result = false;
			const params = {
				out_trade_no: `20170104${ Math.random().toString().substr(2, 10) }`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxx/order/api/notify',
				time_start: '20170104104500',
				time_expire: '20170104160000',
				goods_tag: 'mj',
				product_id: 'qr1001'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const qrPayRes = yield sfPay.sPay(params);
			console.log(`The value of qrPayRes is ${ JSON.stringify(qrPayRes) }`);
			if (qrPayRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('jPay', function () {
		it('jPay should ok', _asyncToGenerator(function* () {
			let result = false;
			const params = {
				out_trade_no: `20170104${ Math.random().toString().substr(2, 10) }`,
				wx_appid: 'xxxxxxxxxxxxxxxx',
				openid: 'xxxxxxxxxxxxxxxxxxxxx',
				body: '测试jsAPI支付',
				total_fee: 100,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxxxxx/order/api/notify',
				goods_tag: 'mj'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const jPayRes = yield sfPay.jPay(params);
			console.log(`The value of jPayRes is ${ JSON.stringify(jPayRes) }`);
			if (jPayRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('tradeQry', function () {
		it('tradeQry should ok', _asyncToGenerator(function* () {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const tradeQryRes = yield sfPay.tradeQry(params);
			console.log(`The value of tradeQryRes is ${ JSON.stringify(tradeQryRes) }`);
			if (tradeQryRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('rfd', function () {
		it('rfd should ok', _asyncToGenerator(function* () {
			let result = false;
			const params = {
				out_refund_no: 'xxxxxxxxxxxxxxxxxxxx',
				total_fee: 100,
				refund_fee: 100
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const rfdRes = yield sfPay.rfd(params);
			console.log(`The value of rfdRes is ${ JSON.stringify(rfdRes) }`);
			if (rfdRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('rfdq', function () {
		it('rfdq should ok', _asyncToGenerator(function* () {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const rfdqRes = yield sfPay.rfdq(params);
			console.log(`The value of rfdqRes is ${ JSON.stringify(rfdqRes) }`);
			if (rfdqRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});

	describe.skip('mpay', function () {
		it('mpay should ok', _asyncToGenerator(function* () {
			let result = false;
			const params = {
				out_trade_no: `20170104${ Math.random().toString().substr(2, 10) }`,
				body: '测试条码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				auth_code: 'xxxxxx', // 扫码支付授权码， 设备读取用户展示的条码或者二维码信息
				time_start: '20170103104500', // yyyyMMddhhmmss
				time_expire: '20170103160000', // yyyyMMddhhmmss
				goods_tag: 'coupon'
			};
			const sfPay = new _sfpay2.default({ key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx' });
			const mPayRes = yield sfPay.mPay(params);
			console.log(`The value of mpayRes is ${ JSON.stringify(mPayRes) }`);
			if (mPayRes) result = true;
			(0, _chai.expect)(result).to.equal(true);
		}));
	});
});