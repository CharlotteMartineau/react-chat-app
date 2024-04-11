export const appendToParam = (key, data) => {
  let param = "";
  data?.forEach((value) => {
    param = param.concat(data[0] === value ? "" : "&", `${key}[]=${value}`);
  });
  return param;
};
