/**
 * Check Development Mode
 */
const IS_LIVE = false;
/**
 * Production URL
 */
const LIVE_URL = '';
/**
 * Development URL
 */
const LOCAL_URL = 'http://3.20.28.27/api';
/**
 * Base URL that will be treated as global start-point.
 */
let BASE_URL = IS_LIVE ? LIVE_URL : LOCAL_URL;

const URL = {
  checkToken: `${BASE_URL}/auth/authenticate-token`,
  patient: {
    LOGIN: `${BASE_URL}/auth/login`,
    SIGNUP: `${BASE_URL}/patient/signup`,
    UPCOMMINGAPPOINTMENTS: `${BASE_URL}/appointments?limit=999&appointment_status_id=1`,
  }
};

export { BASE_URL, URL };
