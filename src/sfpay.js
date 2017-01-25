import md5 from 'MD5';
import { common } from './util';

export default class SFPay {
	constructor({key, spId, muchId}) {
		this.options = {sp_id: spId, mch_id: muchId, partner_key: key};
	}

	static sign({params, partnerKey}) {
		let queryString = Object.keys(params)
			.filter(key => params[key] !== undefined && params[key] !== '' &&
			['partner_key', 'sign', 'key']
				.indexOf(key) < 0)
			.sort()
			.map(key => `${key}=${params[key]}`)
			.join('&');
		queryString = `${queryString}&key=${partnerKey}`;
		return md5(queryString).toUpperCase();
	}

	async sPay(params) {
		const url = '/gate/wx/spay';
		return await common({url, params, options: this.options});
	}

	async jPay(params) {
		const url = '/gate/wx/jpay';
		return await common({url, params, options: this.options});
	}

	async tradeQry(params) {
		const url = '/gate/spsvr/trade/qry';
		return await common({url, params, options: this.options});
	}

	async rfd(params) {
		const url = '/gate/wx/rfd';
		return await common({url, params, options: this.options});
	}

	async rfdq(params) {
		const url = '/gate/spsvr/trade/rfdq';
		return await common({url, params, options: this.options});
	}

	async mPay(params) {
		const url = '/gate/wx/mpay';
		return await common({url, params, options: this.options});
	}

	async reg(params) {
		const url = '/gate/msvr/reg';
		return await common({url, params, options: this.options});
	}
}
