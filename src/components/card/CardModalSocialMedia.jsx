import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import SocialMedia from './CardModalSocialMedia.data'
import './CardModalSocialMedia.scss';
import CardDataContext from './CardData.provider';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const CardModalSocialMedia = () => {
    const [pickedMedia, setPickedMedia] = useState([]);
    const [mediaData, setMediaData] = useState(SocialMedia);
    const [error, setError] = useState(false);
    const [socialMediaMembership, setSocialMediaMembership] = useState({
        access: true,
        limit: 3
    });

    const [favoriteSocialMembership, setFavoriteSocialMembership] = useState({
        access: true,
        limit: 3
    });
    const auth = useSelector((state) => state.auth);

    const {cardData, handleSocialMedia, handleRemoveSocial, actualizeSocial} = useContext(CardDataContext);

    const handlePick = (icon) => {
        const isPicker = pickedMedia.find((pickedIcon) => pickedIcon.name === icon.name);

        if (isPicker) {
            const newPickedMedia = pickedMedia.filter((pickedIcon) => pickedIcon.name !== icon.name);
            setPickedMedia(newPickedMedia);
            handleRemoveSocial(icon);
        } else {
            if(pickedMedia.length + 1 > socialMediaMembership.limit || cardData.socialMedia.length > socialMediaMembership.limit) {
                return setError(`No puede agregar más de ${socialMediaMembership.limit} redes sociales, actualize su membresía.`);
            };
            
            setPickedMedia([...pickedMedia, icon]);
        }
    }

    const isPicked = (icon) => {
        const item = pickedMedia.find((pickedIcon) => pickedIcon.name === icon.name);

        if(item) return true;
    }

    const findValue = (name) => {
        const pickedIcon = cardData.socialMedia.find((socialMedia) => socialMedia.name === name);
        return pickedIcon ? pickedIcon.url : '';
    };

    const handleFavorite = (icon) => {
        if(!favoriteSocialMembership.access) {
            return setError('No tiene permisos para agregar redes favoritas, actualize su membresía.');
        }

        const item = pickedMedia.find((pickedIcon) => pickedIcon.name === icon.name);
        const newPickedMedia = pickedMedia.filter((pickedIcon) => pickedIcon.name !== icon.name);
        const url = cardData.socialMedia.find((socialMedia) => socialMedia.name === icon.name).url;
        
        item.favorite = !item.favorite;
        item.url = url;

        newPickedMedia.unshift(item);

        actualizeSocial(newPickedMedia);
        setPickedMedia(newPickedMedia);
        console.log(cardData.socialMedia)
    };

    const isFavorite = (icon) => {
        const item = pickedMedia.find((pickedIcon) => pickedIcon.name === icon.name);
        return item.favorite;
    };

    useEffect(() => {
        const pickedIcons = [];
        const fakePickedMedia = [];

        cardData.socialMedia.forEach((socialMedia) => {
            const pickedIcon = mediaData.find((icon) => icon.name === socialMedia.name);
            pickedIcons.push({...pickedIcon, url: socialMedia.url, favorite: socialMedia.favorite});
        })

        pickedIcons.forEach((icon) => {
            const newMediaData = mediaData.find((media) => media.name === icon.name);
            if(newMediaData) fakePickedMedia.push(icon);
        });

        setPickedMedia(fakePickedMedia);

        setFavoriteSocialMembership(auth.membership[0].permissions.find((permission) => {
            return permission.permission === 'Redes favoritas';
        }))

        setSocialMediaMembership(auth.membership[0].permissions.find((permission) => {
            return permission.permission === 'Redes sociales adicionales';
        }))
    }, [])

    return (
        <form className='card_modal_socialmedia'>
            <div className="socialmedia_container">
                <h2>Elija sus redes sociales</h2>

                {mediaData.map((socialMedia, index) => (
                    <div className="icon_container">
                        <FontAwesomeIcon key={index} icon={socialMedia.icon} 
                        className='social_icon' onClick={() => handlePick(socialMedia)}
                        style={isPicked(socialMedia) ? {background: socialMedia.color, color: socialMedia.contrast} : 
                        {color: 'grey'}} />

                        {isPicked(socialMedia) && <FontAwesomeIcon icon={faStar} className='favorite_social'
                        style={{color: isFavorite(socialMedia) ? '#D4AF37' : ''}} onClick={(e) => handleFavorite(socialMedia)}/>}
                    </div>
                ))}
            </div>

            <div className="socialmedia_container" style={{marginLeft: 20}}>
                {error && <p style={{color: 'red'}}>{error}</p>}

                <h2 style={{marginLeft: 0}}>Escriba cómo pueden encontrarlo</h2>

                {pickedMedia.map((pickedIcon, index) => (
                    <div key={index} className="socialmedia_input">
                        <FontAwesomeIcon icon={pickedIcon.icon}
                        style={{color: pickedIcon.color}} />

                        <input type="text" placeholder={`Escriba su link a ${pickedIcon.name}`} 
                        onChange={(e) => handleSocialMedia(e, pickedIcon)}
                        value={findValue(pickedIcon.name)}/>
                    </div>
                ))}
            </div>
        </form>
    );
}

export default CardModalSocialMedia;
