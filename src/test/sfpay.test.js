/**
 * Created by TrevionHuang on 2017/1/1 0001.
 */
import SFPay from '../sfpay';
import { expect } from 'chai';

describe('sfpay', () => {
	describe.skip('sPay', () => {
		it('sPay should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: `20170104${Math.random().toString().substr(2, 10)}`,
				body: '测试扫码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxx/order/api/notify',
				time_start: '20170104104500',
				time_expire: '20170104160000',
				goods_tag: 'mj',
				product_id: 'qr1001'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const qrPayRes = await sfPay.sPay(params);
			console.log(`The value of qrPayRes is ${JSON.stringify(qrPayRes)}`);
			if (qrPayRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('jPay', () => {
		it('jPay should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: `20170104${Math.random().toString().substr(2, 10)}`,
				wx_appid: 'xxxxxxxxxxxxxxxx',
				openid: 'xxxxxxxxxxxxxxxxxxxxx',
				body: '测试jsAPI支付',
				total_fee: 100,
				mch_create_ip: '127.0.0.1',
				notify_url: 'http://xxxxxxxxxxxxx/order/api/notify',
				goods_tag: 'mj'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const jPayRes = await sfPay.jPay(params);
			console.log(`The value of jPayRes is ${JSON.stringify(jPayRes)}`);
			if (jPayRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('tradeQry', () => {
		it('tradeQry should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const tradeQryRes = await sfPay.tradeQry(params);
			console.log(`The value of tradeQryRes is ${JSON.stringify(tradeQryRes)}`);
			if (tradeQryRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('rfd', () => {
		it('rfd should ok', async () => {
			let result = false;
			const params = {
				out_refund_no: 'xxxxxxxxxxxxxxxxxxxx',
				total_fee: 100,
				refund_fee: 100
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const rfdRes = await sfPay.rfd(params);
			console.log(`The value of rfdRes is ${JSON.stringify(rfdRes)}`);
			if (rfdRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('rfdq', () => {
		it('rfdq should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: 'xxxxxxxxxxxxxxxxxxxx'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const rfdqRes = await sfPay.rfdq(params);
			console.log(`The value of rfdqRes is ${JSON.stringify(rfdqRes)}`);
			if (rfdqRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe.skip('mpay', () => {
		it('mpay should ok', async () => {
			let result = false;
			const params = {
				out_trade_no: `20170104${Math.random().toString().substr(2, 10)}`,
				body: '测试条码支付',
				total_fee: 1,
				mch_create_ip: '127.0.0.1',
				auth_code: 'xxxxxx', // 扫码支付授权码， 设备读取用户展示的条码或者二维码信息
				time_start: '20170103104500', // yyyyMMddhhmmss
				time_expire: '20170103160000', // yyyyMMddhhmmss
				goods_tag: 'coupon'
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxx', muchId: 'xxxxxxxxxxxxxxxxx'});
			const mPayRes = await sfPay.mPay(params);
			console.log(`The value of mpayRes is ${JSON.stringify(mPayRes)}`);
			if (mPayRes) result = true;
			expect(result).to.equal(true);
		});
	});

	describe('reg', () => {
		it('reg should ok', async () => {
			let result = false;
			const params = {
				mcht_name: 'xxxxxxxxxxx公司',
				mcht_short_name: 'xxxx',
				address: 'xxxxxxxxxxxxxxxxxxxx',
				leg_name: 'xxx',
				leg_phone: 'xxxxxxxxxxxxx',
				leg_email: 'xxxxxxxxxxxxxxxxxxx',
				acc_no: 'xxxxxxxxxxxxxxxxxx',
				acc_bank_name: 'xxxxxxxxxxxxxxxxxxxx',
				acc_bank_no: 'xxxxxxxxxxxxxxxxx',
				service_tel: 'xxxxxxxxxxxxxxxxxxx',
				id_type: 'xxxxxxxxxxxxxxxxxx',
				id_no: 'xxxxxxxxxxxxxxxxxxxx',
				settle_cycle: 'xxxxxxxxxx',
				settle_type: 'xxxxxxxxxxxxxxx',
				settle_rate: 0,
				extra_rate_type: 'xxxxxxxxxxxx',
				extra_rate: 0
			};
			const sfPay = new SFPay({key: 'xxxxxxxxxxxxxxxxxxxx', spId: 'xxxxxxxxxxxxxxxxx', muchId: ''});
			const regRes = await sfPay.reg(params);
			console.log(`The value of regRes is ${JSON.stringify(regRes)}`);
			if (regRes) result = true;
			expect(result).to.equal(true);
		});
	});
});