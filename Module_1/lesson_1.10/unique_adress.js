'use strict';

const getUniqueAdress = (ipList) => [...new Set(ipList)];
// eslint-disable-next-line no-undef
console.log(getUniqueAdress(listIPv4));
