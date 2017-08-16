import fetch from '../config/fetch'

/**
 * 手机号登录
 */

export const sendLogin = (mobile, passwd) => fetch('/login/app_mobile', {
	mobile,
	passwd
}, 'POST');