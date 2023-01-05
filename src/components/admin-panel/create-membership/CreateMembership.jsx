import React from 'react';
import './CreateMembership.scss';

const CreateMembership = () => {
    return (
        <form className='form_container'>
            <div className="form_section">
                <h2>Datos de la membresía</h2>

                <div className="form_group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className="form_group">
                    <label htmlFor="description">Descripción</label>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>
                    <p className='disclaimer'>Esta descripción se mostrará junto con la membresía en la página de compra y en el modal.</p>
                </div>

                <div className="form_group">
                    <label htmlFor="price">Precio</label>
                    <input type="number" name="price" id="price" />
                </div>

                <div className="form_group">
                    <label htmlFor="priceWithOffer">Precio con oferta (porcentaje)</label>
                    <input type="number" name="priceWithOffer" id="priceWithOffer" />
                    <p className="disclaimer">Atributo opcional, si tiene alguna oferta escribir el porcentaje de la misma.</p>
                </div>

                <div className="form_group">
                    <label htmlFor="days">Duración (días)</label>
                    <input type="number" name="days" id="days" />
                </div>

                <div className="form_group">
                    <label htmlFor="image">Imagen</label>
                    <input type="file" name="image" id="image" />
                </div>
            </div>

            <div className="form_section">
                <h2>Restricciones</h2>

                <div className="form_group">
                    <label htmlFor="permissions_perfilPhoto">Acceso a foto de perfil</label>
                    <input type="checkbox" name="permissions_perfilPhoto" id="permissions_perfilPhoto" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_coverPhoto">Acceso a foto de portada</label>
                    <input type="checkbox" name="permissions_coverPhoto" id="permissions_coverPhoto" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_enterprisePhoto">Acceso a foto de su empresa</label>
                    <input type="checkbox" name="permissions_enterprisePhoto" id="permissions_enterprisePhoto" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_name">Acceso a nombre en su tarjeta</label>
                    <input type="checkbox" name="permissions_name" id="permissions_name" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_job">Acceso a cargo en su tarjeta</label>
                    <input type="checkbox" name="permissions_job" id="permissions_job" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_jobEntity">Acceso a poner empresa en la que trabaja</label>
                    <input type="checkbox" name="permissions_jobEntity" id="permissions_jobEntity" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_description[available]">Acceso a una descripción en su tarjeta</label>
                    <input type="checkbox" name="permissions_description" id="permissions_description" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_description[limit]">Límite de carácteres en la descripción</label>
                    <input type="number" name="permissions_description[limit]" id="permissions_description[limit]" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_email">Acceso a E-Mail en su tarjeta</label>
                    <input type="checkbox" name="permissions_email" id="permissions_email" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_saveContact">Acceso a botón para guardar contacto</label>
                    <input type="checkbox" name="permissions_saveContact" id="permissions_saveContact" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_vcard">Acceso a archivo VCard en su tarjeta</label>
                    <input type="checkbox" name="permissions_vcard" id="permissions_vcard" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_publicity">¿El usuario va a tener publicidad de Biznes bajo su tarjeta?</label>
                    <input type="checkbox" name="permissions_publicity" id="permissions_publicity" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_perfilType">Tipos de perfil permitidos para la membresía</label>
                    <div className="perfilType_options">
                        <button>Público</button>
                        <button>Privado</button>
                        <button>VIP</button>
                    </div>
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_userLink">¿El usuario va a poder cambiar la URL de su tarjeta?</label>
                    <input type="checkbox" name="permissions_userLink" id="permissions_userLink" />
                </div>
            </div>  

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

            <div className="form_section">
                <h2>Configuración de código QR</h2>

                <div className="form_group">
                    <label htmlFor="design">¿Puede editar su código QR?</label>
                    <input type="checkbox" name="design" id="design" />
                </div>

                <div className="form_group">
                    <label htmlFor="color">¿Puede tener color en su código QR?</label>
                    <input type="checkbox" name="color" id="color" />

                    <p className="disclaimer">Si el usuario no puede tener color en su código QR, se le asignará un color negro.</p>
                </div>

                <div className="form_group">
                    <label htmlFor="logo">¿Puede tener logo en su código QR?</label>
                    <input type="checkbox" name="logo" id="logo" />
                </div>
            </div>

            <div className="form_section">
                <h2>Limitaciones de diseño</h2>

                <div className="form_group">
                    <label htmlFor="design_design[available]">¿Puede editar el diseño su tarjeta?</label>
                    <input type="checkbox" name="design_design[available]" id="design_design[available]" />
                </div>

                <div className="form_subsection">
                    <h3>Foto de perfil</h3>

                    <div className="form_group">
                        <label htmlFor="design_header[perfilPhoto][available]">¿Puede editar la foto de perfil?</label>
                        <input type="checkbox" name="design_header[perfilPhoto][available]" id="design_header[perfilPhoto][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_header[perfilPhoto][borderRadius]">¿Puede editar el radio del borde?</label>
                        <input type="checkbox" name="design_header[perfilPhoto][borderRadius]" id="design_header[perfilPhoto][borderRadius]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_header[perfilPhoto][borderColor]">¿Puede editar el color del borde?</label>
                        <input type="checkbox" name="design_header[perfilPhoto][borderColor]" id="design_header[perfilPhoto][borderColor]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_header[perfilPhoto][borderWidth]">¿Puede editar el ancho del borde?</label>
                        <input type="checkbox" name="design_header[perfilPhoto][borderWidth]" id="design_header[perfilPhoto][borderWidth]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Foto del logo</h3>

                    <div className="form_group">
                        <label htmlFor="design_header[logoPhoto][available]">¿Puede editar la foto del logo?</label>
                        <input type="checkbox" name="design_header[logoPhoto][available]" id="design_header[logoPhoto][available]" />
                        <p className="disclaimer">En caso de no estar marcado, la foto predeterminada será el logo Biznes.</p>
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_header[logoPhoto][borderRadius]">¿Puede editar el radio del borde?</label>
                        <input type="checkbox" name="design_header[logoPhoto][borderRadius]" id="design_header[logoPhoto][borderRadius]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_header[logoPhoto][borderColor]">¿Puede editar el color del borde?</label>
                        <input type="checkbox" name="design_header[logoPhoto][borderColor]" id="design_header[logoPhoto][borderColor]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_header[logoPhoto][borderWidth]">¿Puede editar el ancho del borde?</label>
                        <input type="checkbox" name="design_header[logoPhoto][borderWidth]" id="design_header[logoPhoto][borderWidth]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Nombre</h3>

                    <div className="form_group">
                        <label htmlFor="design_info[name][available]">¿Puede editar el nombre?</label>
                        <input type="checkbox" name="design_info[name][available]" id="design_info[name][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[name][color]">¿Puede editar el color del nombre?</label>
                        <input type="checkbox" name="design_info[name][color]" id="design_info[name][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[name][fontSize]">¿Puede editar el tamaño del nombre?</label>
                        <input type="checkbox" name="design_info[name][fontSize]" id="design_info[name][fontSize]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[name][letterSpacing]">¿Puede editar la separación entre letras?</label>
                        <input type="checkbox" name="design_info[name][letterSpacing]" id="design_info[name][letterSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[name][wordSpacing]">¿Puede editar la separación entre palabras?</label>
                        <input type="checkbox" name="design_info[name][wordSpacing]" id="design_info[name][wordSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[name][textAlign]">¿Puede editar la alineación del texto?</label>
                        <input type="checkbox" name="design_info[name][textAlign]" id="design_info[name][textAlign]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Puesto y/o empresa</h3>

                    <div className="form_group">
                        <label htmlFor="design_info[job][available]">¿Puede editar el puesto y/o empresa?</label>
                        <input type="checkbox" name="design_info[job][available]" id="design_info[job][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[job][color]">¿Puede editar el color del puesto y/o empresa?</label>
                        <input type="checkbox" name="design_info[job][color]" id="design_info[job][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[job][fontSize]">¿Puede editar el tamaño del puesto y/o empresa?</label>
                        <input type="checkbox" name="design_info[job][fontSize]" id="design_info[job][fontSize]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[job][letterSpacing]">¿Puede editar la separación entre letras?</label>
                        <input type="checkbox" name="design_info[job][letterSpacing]" id="design_info[job][letterSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[job][wordSpacing]">¿Puede editar la separación entre palabras?</label>
                        <input type="checkbox" name="design_info[job][wordSpacing]" id="design_info[job][wordSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[job][textAlign]">¿Puede editar la alineación del texto?</label>
                        <input type="checkbox" name="design_info[job][textAlign]" id="design_info[job][textAlign]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>E-Mail</h3>

                    <div className="form_group">
                        <label htmlFor="design_info[email][available]">¿Puede editar el E-Mail?</label>
                        <input type="checkbox" name="design_info[email][available]" id="design_info[email][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[email][color]">¿Puede editar el color del E-Mail?</label>
                        <input type="checkbox" name="design_info[email][color]" id="design_info[email][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[email][fontSize]">¿Puede editar el tamaño del E-Mail?</label>
                        <input type="checkbox" name="design_info[email][fontSize]" id="design_info[email][fontSize]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[email][letterSpacing]">¿Puede editar la separación entre letras?</label>
                        <input type="checkbox" name="design_info[email][letterSpacing]" id="design_info[email][letterSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[email][textAlign]">¿Puede editar la alineación del texto?</label>
                        <input type="checkbox" name="design_info[email][textAlign]" id="design_info[email][textAlign]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Biografía</h3>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][available]">¿Puede editar su biografía?</label>
                        <input type="checkbox" name="design_info[biography][available]" id="design_info[biography][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][color]">¿Puede editar el color su biografía?</label>
                        <input type="checkbox" name="design_info[biography][color]" id="design_info[biography][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][fontSize]">¿Puede editar el tamaño su biografía?</label>
                        <input type="checkbox" name="design_info[biography][fontSize]" id="design_info[biography][fontSize]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][letterSpacing]">¿Puede editar la separación entre letras?</label>
                        <input type="checkbox" name="design_info[biography][letterSpacing]" id="design_info[biography][letterSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][lineHeight]">¿Puede editar el tamaño de la línea?</label>
                        <input type="checkbox" name="design_info[biography][lineHeight]" id="design_info[biography][lineHeight]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][wordSpacing]">¿Puede editar la separación entre palabras?</label>
                        <input type="checkbox" name="design_info[biography][wordSpacing]" id="design_info[biography][wordSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_info[biography][textAlign]">¿Puede editar la alineación del texto?</label>
                        <input type="checkbox" name="design_info[biography][textAlign]" id="design_info[biography][textAlign]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Botón VCard</h3>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][available]">¿Puede editar el botón VCard?</label>
                        <input type="checkbox" name="design_buttons[vcard][available]" id="design_buttons[vcard][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][color]">¿Puede editar el color del botón VCard?</label>
                        <input type="checkbox" name="design_buttons[vcard][color]" id="design_buttons[vcard][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][fontSize]">¿Puede editar el tamaño del texto del botón VCard?</label>
                        <input type="checkbox" name="design_buttons[vcard][fontSize]" id="design_buttons[vcard][fontSize]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][letterSpacing]">¿Puede editar la separación entre letras?</label>
                        <input type="checkbox" name="design_buttons[vcard][letterSpacing]" id="design_buttons[vcard][letterSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][backgroundColor]">¿Puede editar el color del botón?</label>
                        <input type="checkbox" name="design_buttons[vcard][backgroundColor]" id="design_buttons[vcard][backgroundColor]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][borderRadius]">¿Puede editar el radio de las esquinas del botón?</label>
                        <input type="checkbox" name="design_buttons[vcard][borderRadius]" id="design_buttons[vcard][borderRadius]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][width]">¿Puede editar el ancho del botón?</label>
                        <input type="checkbox" name="design_buttons[vcard][width]" id="design_buttons[vcard][width]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[vcard][height]">¿Puede editar el alto del botón?</label>
                        <input type="checkbox" name="design_buttons[vcard][height]" id="design_buttons[vcard][height]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Botón de contacto</h3>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][available]">¿Puede editar el botón de contacto?</label>
                        <input type="checkbox" name="design_buttons[saveContact][available]" id="design_buttons[saveContact][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][color]">¿Puede editar el color del botón de contacto?</label>
                        <input type="checkbox" name="design_buttons[saveContact][color]" id="design_buttons[saveContact][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][fontSize]">¿Puede editar el tamaño del texto del botón de contacto?</label>
                        <input type="checkbox" name="design_buttons[saveContact][fontSize]" id="design_buttons[saveContact][fontSize]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][letterSpacing]">¿Puede editar la separación entre letras?</label>
                        <input type="checkbox" name="design_buttons[saveContact][letterSpacing]" id="design_buttons[saveContact][letterSpacing]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][backgroundColor]">¿Puede editar el color del botón?</label>
                        <input type="checkbox" name="design_buttons[saveContact][backgroundColor]" id="design_buttons[saveContact][backgroundColor]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][borderRadius]">¿Puede editar el radio de las esquinas del botón?</label>
                        <input type="checkbox" name="design_buttons[saveContact][borderRadius]" id="design_buttons[saveContact][borderRadius]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][width]">¿Puede editar el ancho del botón?</label>
                        <input type="checkbox" name="design_buttons[saveContact][width]" id="design_buttons[saveContact][width]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_buttons[saveContact][height]">¿Puede editar el alto del botón?</label>
                        <input type="checkbox" name="design_buttons[saveContact][height]" id="design_buttons[saveContact][height]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Redes sociales favoritas</h3>

                    <div className="form_group">
                        <label htmlFor="design_social[favorites][available]">¿Puede editar las redes sociales favoritas?</label>
                        <input type="checkbox" name="design_social[favorites][available]" id="design_social[favorites][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_social[favorites][color]">¿Puede editar el color DEL ÍCONO de las redes sociales favoritas?</label>
                        <input type="checkbox" name="design_social[favorites][color]" id="design_social[favorites][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_social[favorites][backgroundColor]">¿Puede editar el color de fondo de las redes sociales favoritas?</label>
                        <input type="checkbox" name="design_social[favorites][backgroundColor]" id="design_social[favorites][backgroundColor]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_social[favorites][borderRadius]">¿Puede editar el radio de las esquinas de las redes sociales favoritas?</label>
                        <input type="checkbox" name="design_social[favorites][borderRadius]" id="design_social[favorites][borderRadius]" />
                    </div>
                </div>

                <div className="form_subsection">
                    <h3>Redes sociales adicionales</h3>

                    <div className="form_group">
                        <label htmlFor="design_social[aditionals][available]">¿Puede editar las redes sociales adicionales?</label>
                        <input type="checkbox" name="design_social[aditionals][available]" id="design_social[aditionals][available]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_social[aditionals][color]">¿Puede editar el color DEL ÍCONO de las redes sociales adicionales?</label>
                        <input type="checkbox" name="design_social[aditionals][color]" id="design_social[aditionals][color]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_social[aditionals][backgroundColor]">¿Puede editar el color de fondo de las redes sociales adicionales?</label>
                        <input type="checkbox" name="design_social[aditionals][backgroundColor]" id="design_social[aditionals][backgroundColor]" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="design_social[aditionals][borderRadius]">¿Puede editar el radio de las esquinas de las redes sociales adicionales?</label>
                        <input type="checkbox" name="design_social[aditionals][borderRadius]" id="design_social[aditionals][borderRadius]" />
                    </div>
                </div>

            </div>

            <button type="submit" id='create_category_submit'>Crear categoría</button>

        </form>
    );
}

export default CreateMembership;
