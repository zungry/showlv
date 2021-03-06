import {
    RECORD_USERINFO
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

export default {
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true;
        setStore('user_id', info.user_id);
    }
}