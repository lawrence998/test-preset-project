import request from 'services/request';

export function getDemo(params) {
  return request({
    url: '/test/demo',
    method: 'get',
    isMock: true,
    params
  });
};
