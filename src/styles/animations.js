import colors from "./colors";

export const modalAppearAnimation = {
    backgroundColor: colors.dark_transparency,
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
};

export const sizeUpXAnimation = (sizeFinal) => {
    return {
        width: sizeFinal
    }
}
