import axios from 'axios';
import UUID from 'uuid-js';
    // => GET /api/gift/for/<uid>/checked
    // => GET /api/gift/for/<uid>/available
    // => GET /api/gift/checkout/<uid>/<gift>
    // => GET /api/gift/uncheck/<uid>/<gift>


const get = url => axios.get(`${url}?v=${UUID.create()}`);

export const checkinCode = code => get(`/api/checkin/code/${code}/`);
export const checkinUid = uid => get(`/api/checkin/user_id/${uid}/`);
export const uncheckCode = code => get(`/api/uncheck/code/${code}/`);
export const uncheckUid = uid => get(`/api/uncheck/user_id/${uid}/`);
export const search = keyword => get(`/api/search/${keyword}/`);
// export const giftList = uid => get(`/api/gift/list/${uid}/`);
export const giftAvailable = uid => get(`/api/gift/for/${uid}/available`);
export const checkoutGift = (uid, gift) => get(`/api/gift/checkout/${uid}/${gift}`);
export const uncheckGift = (uid, gift) => get(`/api/gift/uncheck/${uid}/${gift}`);

// admin TODO
export const setToday = day => get(`/admin/set_today/${day}`);
export const getToday = () => get('/admin/today');
