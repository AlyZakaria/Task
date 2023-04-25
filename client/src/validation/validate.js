

export const priceValid = (price) => {
    if(Number(price) >= 0) return price;
    return false;
};

export const attributesValid = (first = 0, second = 0, third = 0) => {
    const regex = /^[0-9]+.?[0-9]*$/;
    if( regex.test(first) && regex.test(second) && regex.test(third) )
        return true;
    return false;
}
