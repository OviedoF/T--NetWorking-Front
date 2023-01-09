import React from 'react';
import './BrandsSection.scss';

const brands = [
    "https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_261,h_147,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_00d04f5724314ec689946e22d4b8b49c~mv2.png/v1/fill/w_261,h_147,q_90/c837a6_00d04f5724314ec689946e22d4b8b49c~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_184d980948c744d6a2ce33533cfaab1e~mv2.png/v1/fill/w_260,h_147,q_90/c837a6_184d980948c744d6a2ce33533cfaab1e~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_59362db94e2d47f299879adb4156d23b~mv2.png/v1/fill/w_261,h_147,q_90/c837a6_59362db94e2d47f299879adb4156d23b~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_260,h_147,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_59362db94e2d47f299879adb4156d23b~mv2.png/v1/fill/w_261,h_147,q_90/c837a6_59362db94e2d47f299879adb4156d23b~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_260,h_147,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_59362db94e2d47f299879adb4156d23b~mv2.png/v1/fill/w_261,h_147,q_90/c837a6_59362db94e2d47f299879adb4156d23b~mv2.webp",
    "https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_260,h_147,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.webp"
]

const BrandsSection = () => {
    return (
        <section id='brands_section'>
            <h2 style={{fontWeight: 'bold'}}>Marcas</h2>

            <div className="brands_container">
                <div className="brands_slider" style={{width: `${200 * brands.length}px`}}>
                    {brands.map((brand, index) => (
                        <div key={index} className="brands_item">
                            <img src={brand} alt="brand" />
                        </div>
                    ))}
                </div>

                <div className="brands_slider" style={{width: `${200 * brands.length}px`}}>
                    {brands.map((brand, index) => (
                        <div key={index} className="brands_item">
                            <img src={brand} alt="brand" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrandsSection;
