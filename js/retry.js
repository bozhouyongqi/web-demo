const LOOP_TIMES_FOR_INIT = 3;

const LOOP_DURING_FOR_INIT = 2000;

let retryNum = 0;

/**
 * 异步串行重试
 */

const createAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (retryNum++ < 5) {
        reject();
      } else {
        resolve({orderStr: '111'})
      }
    }, 100);
  })
}

const createCashierOrder = (param) => {
  return createAPI(param);
};

async function getCashierOrderStr(param) {
  async function requestCashierOrder(param) {
    const res = await createCashierOrder(param).catch(() => {});
    const orderStr = res?.orderStr;
    if (orderStr) {
      console.log('成功');
      return res;
    }
    
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        if(retryNumber++ < LOOP_TIMES_FOR_INIT) {
          console.log('失败');
          return await requestCashierOrder(param).then(res => resolve(res)).catch(error => reject(error));
        }
        // 这里是最后一次调用依然失败，则reject返回
        reject(res);
      }, LOOP_DURING_FOR_INIT);
    }) 
  }
  let retryNumber = 0;
  return await requestCashierOrder(param).catch(error => error);
}

(async function name(params) {
  const res = await getCashierOrderStr().catch(error => error);
  if (res && res.orderStr) {
    console.log('最终获取成功, res ', res)
  } else {
    console.log('最终获取失败, ', res)
  }
})()
