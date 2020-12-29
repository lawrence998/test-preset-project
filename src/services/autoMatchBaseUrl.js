// import { UPLOAD_PREFIX } from '@/constant';
import { combineURLs } from 'utils';
import mockBaseUrl from '@/config/urlMap';

/**
 * 根据前缀，自动匹配基础的url
 * 根据项目所需，自己扩展
 * @param prefix
 * @returns {string}
 */
// export default function autoMatchBaseUrl (prefix = '') {
//   let baseUrl = '';
//   if (prefix === UPLOAD_PREFIX) {
//     baseUrl = window.LOCAL_CONFIG.API_UPLOAD;
//   } else {
//     baseUrl = window.LOCAL_CONFIG.API_HOME;
//   }

//   return combineURLs(baseUrl, prefix);
// }

export default function autoMatchBaseUrl (domainName = '', url = '', isMock = false) {
  console.log('isMock: ', isMock);
  console.log('mockBaseUrl[url]: ', mockBaseUrl[url]);
  return isMock ? mockBaseUrl[url] : combineURLs(domainName, url);
}
