

// export const propertiesValid = /^[0-9]+$/;
export const priceValid = (price) => {
    if(Number(price) >= 0) return price;
    return false;
};

export const attributesValid = (first = 0, second = 0, third = 0) => {
    // console.log(first, second, third);
    if(Number(first) >= 0 && Number(second) >= 0 && Number(third) >= 0) 
            return true;
    return false;
}