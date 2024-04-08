// Componente reutilizable para mostrar mensajes de error
function MensajeError({ error }) {
    return error && <p>{error}</p>;
}

export default MensajeError;