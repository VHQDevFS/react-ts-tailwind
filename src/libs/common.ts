import dayjs, { Dayjs } from 'dayjs';

export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
export const regexNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
export const regexNumber0100 = /^(0|[1-9][0-9]?|100)$/;

export const checkValidEmail = (email: string) => regexEmail.test(email);

export function checkValidPhoneNumber(input: string) {
  if (regexPhoneNumber.test(input) && input.replace(/\D/g, '').length <= 15) {
    return true;
  }
  return false;
}

export const getBase64 = (imgFile: File, callback: (v: string | ArrayBuffer | null) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(imgFile);
};

export const getBase64FileList = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const removeAccents = (str: string) => {
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    const re = new RegExp(`[${AccentsMap[i].substr(1)}]`, 'g');
    const char = AccentsMap[i][0];
    // eslint-disable-next-line no-param-reassign
    str = str.replace(re, char);
  }
  return str;
};

export const convertToSlug = (text: string) => {
  const a = removeAccents(text);
  return a
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const beforeUpload = (file: File) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    // message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    // message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export const beforeUploadFileType = (file: File) => {
  const isFileTypes =
    file.type === 'image/JPG' ||
    file.type === 'image/PNG' ||
    file.type === 'application/pdf' ||
    file.type === 'application/doc' ||
    file.type === 'application/ppt' ||
    file.type === 'application/xlsx' ||
    file.type === 'application/xml' ||
    file.type === 'application/ppt';
  if (!isFileTypes) {
    // message.error('You can only upload JPG/PNG/PDF/DOC/PPT/XLSX/XML/CSV file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    // message.error('Image must smaller than 2MB!');
  }
  return isFileTypes && isLt2M;
};

export const delayKeyUp = (() => {
  let timer: ReturnType<typeof setTimeout>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (callback: any, ms: number, that: any) => {
    clearTimeout(timer);
    timer = setTimeout(callback.bind(that), ms);
  };
})();

const censorWord = (str: string) => str[0] + '*'.repeat(str.length - 2) + str.slice(-1);

export const censorEmail = (e: string) => {
  const arr = e.split('@');
  return `${censorWord(arr[0])}@${censorWord(arr[1])}`;
};

// disabledDate
export const disabledDateNow = (current: Dayjs) =>
  current &&
  (current.valueOf() > Date.now() || current.valueOf() < dayjs('01/01/1900').unix() * 1000);

export const containsDecodeComponents = (x: string) => decodeURIComponent(x);
export const containsEncodeComponents = (x: string) => encodeURIComponent(x);

export const deleteELObjByKey = <T extends Record<string, string | any>>(
  obj: T,
  key: string[] = []
) => {
  const newObj = obj;
  if (key && key?.length > 0)
    key.forEach((el) => {
      delete newObj?.[el];
    });
  return newObj;
};

export const convertObjToQuery = <T extends Record<string, string | any>>(obj: T) => {
  const str = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      str.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(
          typeof obj[key] === 'string' ? obj[key] : JSON.stringify(obj[key])
        )}`
      );
    }
  }
  return str.join('&');
};

// setCookie
export const setCookie = (cname: string, cValue: string, exDays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cValue};${expires};path=/`;
};

// deleteCookie
export const deleteCookie = (cname: string) => {
  const d = new Date();
  d.setTime(d.getTime() + 0 * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}='';${expires};path=/`;
};

// getCookie
export const getCookie = (cname: string) => {
  const name = `${cname}=`;
  if (process.browser) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return '';
};

export const checkCookie = (cname: string) => {
  const cValue = getCookie(cname);
  return cValue;
};

// use in breadcrumb
export const convertArrayToObject = <T extends Record<string, string | any>>(
  data: T[],
  key1: string,
  key2: string,
  defaultKey?: string
) =>
  data
    ? data.reduce(
        (acc, cur) => ({
          ...acc,
          [cur[key1] ?? defaultKey]: cur[key2],
        }),
        {}
      )
    : {};

export function formatNumber(n?: number, formatType: ',' | '.' = '.') {
  return typeof n === 'number'
    ? n.toString().replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, formatType)
    : '';
}

export const checkValueObjForm = <T extends object>(obj: T) => {
  if (!obj) return false;
  return Object.values(obj).every((v) => !!v);
};

export const checkLinkImage = (link: string | string[]) => {
  const isValidLink =
    (typeof link === 'string' &&
      link?.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null) ||
    (Array.isArray(link) &&
      link?.every(
        (l: string) => l.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null
      ));

  return isValidLink;
};

export const capitalizeFirstLetter = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

export const chunkArray = <T>(array: T[] | any, n: number) => {
  if (!array || !Array.isArray(array)) return [];
  const result = array.reduce(
    (resultArray: typeof array, item: typeof array[number], index: number) => {
      const chunkIndex = Math.floor(index / n);

      if (!resultArray[chunkIndex]) {
        // eslint-disable-next-line no-param-reassign
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  return result;
};

export const padZero = (number: number) =>
  number !== 0 ? String(number).padStart(2, '0') : number.toString();

export function customToFixed(value: number, digits = 2) {
  return parseFloat(value.toFixed(digits));
}

export function getPropertyName<T extends object>(
  obj: T,
  expression: (x: { [Property in keyof T]: () => string }) => () => string
): string {
  const res: { [Property in keyof T]: () => string } = {} as {
    [Property in keyof T]: () => string;
  };

  // eslint-disable-next-line no-return-assign
  Object.keys(obj).map((k) => (res[k as keyof T] = () => k));

  return expression(res)();
}
