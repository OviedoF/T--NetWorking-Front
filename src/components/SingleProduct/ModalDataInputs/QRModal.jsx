import React from 'react';

const QRModal = ({cards}) => {
    return (
        <div>
            {cards.map(card => {
                return (
                    <div key={card._id}>
                        <img src={card.qr} alt="qr" />
                    </div>
                )
            })
            }
        </div>
    );
}

export default QRModal;
