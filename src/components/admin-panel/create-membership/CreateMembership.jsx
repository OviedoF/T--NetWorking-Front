import React from 'react';
import './CreateMembership.scss';
import { CreateMembershipContext } from './CreateMembershipData.provider';
import { useContext } from 'react';
import MembershipInfoForm from './MembershipInfoForm';
import MembershipRestriccionsForm from './MembershipRestriccionsForm';
import SocialMembershipForm from './SocialMembershipForm';
import QRForm from './QRForm';

const CreateMembership = () => {
    return (
        <form className='form_container'>
            <MembershipInfoForm />

            <MembershipRestriccionsForm />

            <SocialMembershipForm />

            <QRForm />

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
