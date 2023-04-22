interface ValidateFunctions {
  isEmail: (email: string) => boolean;
  minLenght: (string: string, min: number) => boolean;
  equalStrings: (string1: string, string2: string) => boolean;
}

const Validator: ValidateFunctions = {
  isEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  minLenght: (str, min) => {
    return str.length >= min;
  },
  equalStrings: (str1, str2) => {
    return str1 === str2;
  },
};

export default Validator;
