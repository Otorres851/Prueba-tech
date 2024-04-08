// Componente reutilizable para el formulario de consulta
function FormularioConsulta({ documentoConsulta, onChangeDocumento, onSubmit }) {
    return (
      <form className="form-container" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <label className="form-label col-sm-2">Número de documento:</label>
        <input 
          type="text" 
          placeholder="Número" 
          className="form-control form-control-sm col-md-12" 
          value={documentoConsulta} 
          onChange={onChangeDocumento} 
        />
        <button type="submit" className="btn-consulta">Consultar</button>
      </form>
    );
  }

export default FormularioConsulta;