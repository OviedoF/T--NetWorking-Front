import { createContext, useState } from "react";
import defaultStyles from './cardData.defaultStyles.js';

export const CardDataContext = createContext();

const initialState = {socialMedia: []};

const CardDataProvider = ({ children }) => {
    const [cardData, setCardData] = useState({
        ...initialState,
        styles: defaultStyles
    });
    console.log(defaultStyles)

    const handleInputs = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    }

    const handleImages = (e) => {
        const fakeUrl = URL.createObjectURL(e.target.files[0]);

        setCardData({ 
            ...cardData,
            [e.target.name]: e.target.files[0],
            [`${e.target.name}Url`]: fakeUrl
        });
    }

    const handleBoolean = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.checked });
    }

    const handleSocialMedia = (e, icon) => {
        let aux = cardData.socialMedia;
        
        aux = aux.filter((item) => item.name !== icon.name);

        aux.push({
            name: icon.name,
            color: icon.color,
            contrast: icon.contrast,
            url: e.target.value,
            favorite: icon.favorite
        });

        setCardData({ ...cardData, socialMedia: aux });
    }
        
    const handleRemoveSocial = (icon) => {
        const aux = cardData.socialMedia.filter((item) => item.name !== icon.name);

        setCardData({ ...cardData, socialMedia: aux });
    }

    const actualizeSocial = (socials) => {
        const auxSocial = [];

        socials.forEach((social) => {
            auxSocial.push({
                name: social.name,
                color: social.color,
                contrast: social.contrast,
                url: social.url,
                favorite: social.favorite
            });
        });

        setCardData({ ...cardData, socialMedia: auxSocial });
    };

    const handleStyles = (e) => {
        console.log('-----------------------------------');

        console.log(e.target.name, 'name');
        console.log(e.target.value, 'value');
        console.log(e.target.id, 'id');
        console.log(e.target.className, 'class');     
        const isPercent = e.target.id.includes('percent');
        const isColor = e.target.id.includes('color');
        const isPixels = e.target.id.includes('pixels');
        const isText = e.target.id.includes('text');
        console.log(isText, 'isText');
        
        console.log('-----------------NOMBRE ESTILO------------------');
        console.log(`${e.target.className} ${e.target.name}`)
        console.log(cardData.styles[e.target.className][e.target.name], 'valor anterior');

        if (isPercent) {
            setCardData({
                ...cardData,
                styles: {
                    ...cardData.styles,
                    [e.target.className]: {
                        ...cardData.styles[e.target.className],
                        [e.target.name]: `${e.target.value}%`
                    }
                }
            });
        } else if (isColor) {
            setCardData({
                ...cardData,
                styles: {
                    ...cardData.styles,
                    [e.target.className]: {
                        ...cardData.styles[e.target.className],
                        [e.target.name]: e.target.value
                    }
                }
            });
        } else if (isPixels) {
            setCardData({
                ...cardData,
                styles: {
                    ...cardData.styles,
                    [e.target.className]: {
                        ...cardData.styles[e.target.className],
                        [e.target.name]: `${e.target.value}px`
                    }
                }
            });
        } else if (isText) {
            setCardData({
                ...cardData,
                styles: {
                    ...cardData.styles,
                    [e.target.className]: {
                        ...cardData.styles[e.target.className],
                        [e.target.name]: e.target.value
                    }
                }
            });
        }
    }

    const data = { 
        cardData, 
        handleInputs, 
        handleImages, 
        handleBoolean, 
        handleSocialMedia, 
        handleRemoveSocial,
        actualizeSocial,
        handleStyles
    }

    return (
        <CardDataContext.Provider value={data}>
            {children}
        </CardDataContext.Provider>
    );
};

export {CardDataProvider}

export default CardDataContext;