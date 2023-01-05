import logo from '../../../assets/logo.png';

const EditOrders = ({stateOrder, item, reset, handleSubmit, errores, success}) => {

    return (
        <div style={{background: '#646464', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '15px'}}>
            <img style={{width: '90px', marginTop: '10px', marginBottom: '10px', height: '90px'}} src={logo} alt="Logo Networking" />
            <h1 style={{textAlign: 'center'}}>¿Estas seguro de que quieres pasar<br/> este pedido de "{item.state}" a "{stateOrder}"?</h1>
            <div style={{padding: '5px', marginBottom:'10px'}}>
                <button style={{color: 'white', cursor: 'pointer', marginTop: '10px', padding: '10px'}} type="button" onClick={() => handleSubmit()}>Confirmar</button>
                <button style={{color: 'white', cursor: 'pointer', marginLeft: '30px', padding: '10px'}} className="btn" type="submit" onClick={() => reset()}>Cancelar</button>
            </div>
        </div>
    )
}

export default EditOrders