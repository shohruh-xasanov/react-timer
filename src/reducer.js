const reducer = (state ,action) => {
    const limitRGB = num => (num <0 ? 0 : num > 255 ? 255 : num);
    const step = 50;

    switch (action.type) {
        case "INC_R":
            return {
                ...state,
                r : limitRGB(state.r + step)
            }
        case "DIC_R":
            return {
                ...state,
                r : limitRGB(state.r - step)
            };
        case "INC_B":
            return {
                ...state,
                b : limitRGB(state.b + step)
            };
        case "DIC_B":
            return {
                ...state,
                b : limitRGB(state.b - step)
            };
        case "INC_G":
            return {
                ...state,
                g : limitRGB(state.g + step)
            };
        case "DIC_G":
            return {
                ...state,
                g : limitRGB(state.g - step)
            };   
        default:
            break;
    }
}

export default reducer