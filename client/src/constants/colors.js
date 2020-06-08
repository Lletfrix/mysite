export const DARK_GREY = "#2c3e50";
export const BACKGROUND_GREY = "#f8f8f8";
export const YELLOW = "#e9bc3f";
export const PINK = "#eb4888";
export const BLUE = "#10a2f5";
export const GREEN = "#24ff5a";
export const PURPLE = "#ab9df2";
export const randColor = () => {
    const colorList = [YELLOW, PINK, BLUE, GREEN, PURPLE];
    return colorList[Math.floor(Math.random() * colorList.length)];
}
export const changeLightness = (color, delta) => {
    const colnum = parseInt(color.substr(1), 16);
    const str = ((((colnum & 0x0000FF) + delta) | ((((colnum >> 8) & 0x00FF) + delta) << 8) | (((colnum >> 16) + delta) << 16)).toString(16));
    return '#' + ('000000'+str).substr(-6)
}
