export const toPersianNumber = (englishNumber) => {
    const englishNumber_string = String(englishNumber);
    let result = englishNumber_string;
    result = result.replace(/0/gi, "۰");
    result = result.replace(/1/gi, "۱");
    result = result.replace(/2/gi, "۲");
    result = result.replace(/3/gi, "۳");
    result = result.replace(/4/gi, "۴");
    result = result.replace(/5/gi, "۵");
    result = result.replace(/6/gi, "۶");
    result = result.replace(/7/gi, "۷");
    result = result.replace(/8/gi, "۸");
    result = result.replace(/9/gi, "۹");
    return result;
}