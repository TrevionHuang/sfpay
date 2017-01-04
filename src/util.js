import request from 'request';
import SFPay from './sfpay';

export async function reqTool({options}) {
	let result = null;
	try {
		await new Promise((resolve, reject) => {
			request(options, (err, response, body) => {
				!err ? resolve(body) : reject(err); // eslint-disable-line
			});
		}).then(docs => {
			result = docs;
		});
	} catch (e) {
		console.log(`ERROR:${e}`);
	}
	return result;
}

export function generateNonceString({length}) {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const maxPos = chars.length;
	let nonceStr = '';
	for (let i = 0; i < (length || 32); i++) {
		nonceStr += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return nonceStr;
}

export function mix(...args) {
	const root = args[0];
	args.forEach(element => {
		Object.keys(element).forEach(key => {
			if (element.hasOwnProperty(key)) root[key] = element[key];
		});
	});
	return root;
}

export async function postReq({url, params}) {
	console.log(`The value of params is ${JSON.stringify(params)}`);
	const options = {
		headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		url: `http://api.shangfudata.com${url}`,
		method: 'post',
		form: params,
		json: true
	};
	return await reqTool({options});
}

export async function common({url, params, options}) {
	params.nonce_str = params.nonce_str || generateNonceString({length: 32}); // eslint-disable-line
	mix(params, options);
	params.sign = SFPay.sign({params, partnerKey: options.partner_key}); // eslint-disable-line
	return await postReq({url, params});
}
