const USDFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const NumberFormat = new Intl.NumberFormat();

const formatPhoneNumber = (value) => {
    if (!value) return value;
    // clean the input for any non-digit values.
    const phoneNum = value.replace(/[^\d]/g, '');
    const phoneNumLength = phoneNum.length;
    if (phoneNumLength < 4) return phoneNum;
    if (phoneNumLength < 7) {
        return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`;
    }
    return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(6, 10)}`;
};

const formatSSN = (value) => {
    if (!value) return value;
    // clean the input for any non-digit values.
    const phoneNum = value.replace(/[^\d]/g, '');
    const phoneNumLength = phoneNum.length;
    if (phoneNumLength < 4) return phoneNum;
    if (phoneNumLength < 6) {
        return `${phoneNum.slice(0, 3)}-${phoneNum.slice(3)}`;
    }
    return `${phoneNum.slice(0, 3)}-${phoneNum.slice(3, 5)}-${phoneNum.slice(5, 9)}`;
};

const formatText = (name) => {
    name = name.replaceAll('_', ' ');
    let names = name.split(' ');
    for (let i in names) {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    }
    name = names.join(' ');
    return name;
}

export {
    USDFormat,
    NumberFormat,
    formatPhoneNumber,
    formatSSN,
    formatText
}