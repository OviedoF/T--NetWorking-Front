import React from 'react';

const SocialMembershipForm = () => {
    return (
        <>
        <div className="form_section">
                <h2>Configuración de redes sociales</h2>

                <div className="form_subsection">
                    <h3>Favoritas</h3>

                    <div className="form_group">
                        <label htmlFor="socialMedia_favorites[available]">¿Puede tener redes sociales favoritas?</label>
                        <input type="checkbox" name="socialMedia_favorites[available]" id="socialMedia_favorites[available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="socialMedia_favorites[limit]">Límite de redes sociales favoritas</label>
                        <input type="number" name="socialMedia_favorites[limit]" id="socialMedia_favorites[limit]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="socialMedia_favorites[required]">Redes sociales favoritas OBLIGATORIAS</label>

                        <div className="socialMedia_favorites_options">
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                        </div>

                        <p className="disclaimer">Estas redes sociales estarán como favoritas y el usuario no podrá quitarlas, ocupando así X espacios del límte</p>
                    </div>

                    <div className="form_group">
                        <label htmlFor="socialMedia_favorites[exclude]">¿Hay alguna red social excluida de favoritos?</label>
                        <div className="socialMedia_favorites_options">
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                        </div>

                        <p className="disclaimer">Estas redes sociales no podrán estar como favoritas.</p>
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Adicionales</h3>

                    <div className="form_group">
                        <label htmlFor="socialMedia_aditionales[available]">¿Puede tener redes sociales adicionales?</label>
                        <input type="checkbox" name="socialMedia_aditionales[available]" id="socialMedia_aditionales[available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="socialMedia_aditionales[limit]">Límite de redes sociales adicionales</label>
                        <input type="number" name="socialMedia_aditionales[limit]" id="socialMedia_aditionales[limit]" />
                        <p className="disclaimer">Escriba 0 si no hay límite en las redes sociales adicionales.</p>
                    </div>

                    <div className="form_group">
                        <label htmlFor="socialMedia_aditionales[required]">Redes sociales adicionales OBLIGATORIAS</label>

                        <div className="socialMedia_aditionales_options">
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                        </div>

                        <p className="disclaimer">Estas redes sociales estarán como adicionales y el usuario no podrá quitarlas, ocupando así X espacios del límte</p>
                    </div>

                    <div className="form_group">
                        <label htmlFor="socialMedia_aditionales[exclude]">¿Hay alguna red social excluida de adicionales?</label>
                        <div className="socialMedia_aditionales_options">
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                        </div>

                        <p className="disclaimer">Estas redes sociales no podrán estar como adicionales.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SocialMembershipForm;
