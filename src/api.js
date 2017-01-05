import axios from 'axios';
    // => GET /api/gift/for/<uid>/checked
    // => GET /api/gift/for/<uid>/available
    // => GET /api/gift/checkout/<uid>/<gift>
    // => GET /api/gift/uncheck/<uid>/<gift>
export const checkinCode = code => axios.get(`/api/checkin/code/${code}/`);
export const checkinUid = uid => axios.get(`/api/checkin/user_id/${uid}/`);
export const uncheckCode = code => axios.get(`/api/uncheck/code/${code}/`);
export const uncheckUid = uid => axios.get(`/api/uncheck/user_id/${uid}/`);
export const search = keyword => axios.get(`/api/search/${keyword}/`);
// export const giftList = uid => axios.get(`/api/gift/list/${uid}/`);
export const giftAvailable = uid => axios.get(`/api/gift/for/${uid}/available`);
export const checkoutGift = (uid, gift) => axios.get(`/api/gift/checkout/${uid}/${gift}`);
export const uncheckGift = (uid, gift) => axios.get(`/api/gift/uncheck/${uid}/${gift}`);

// admin TODO
export const setToday = day => axios.get(`/admin/set_today/${day}`);
export const getToday = () => axios.get('/admin/today');
