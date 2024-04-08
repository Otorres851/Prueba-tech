import FormularioConsulta from './FormularioConsulta';
import MensajeError from './MensajeError';
import InformacionEstudiante from './InformacionEstudiante';
import React, { useState, useEffect } from 'react';

//Función para consultar los datos de la api
const Consulta = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [documentoConsulta, setDocumentoConsulta] = useState('');
  const [estudianteEncontrado, setEstudianteEncontrado] = useState(null);
  const [error, setError] = useState('');

  const apiUrl = 'https://api.talentotech.cymetria.com/api/v1/blockchain/obtener-estudiantes-aprobados';

  //Función para obtener los datos de los estudiantes en la api
  const obtenerEstudiantes = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setEstudiantes(data.estudiantes_aprobados);
      } else {
        throw new Error('Error al obtener los datos');
      }
    } catch (error) {
      setError('Error al obtener los datos');
    }
  };

  //Función para comparar los datos y ser un número válido, sin espacios ni caracteres especiales
  const handleConsulta = () => {
    setError('');
    if (!documentoConsulta) {
      setError('Por favor ingrese un número de documento');
      return;
    }
    if (!/^\d+$/.test(documentoConsulta)) {
      setError('El número de documento debe contener solo números');
      return;
    }
    const estudiante = estudiantes.find(estudiante => estudiante.estudiante.num_documento === documentoConsulta);
    if (estudiante) {
      setEstudianteEncontrado(estudiante);
    } else {
      setError('Estudiante no encontrado');
    }
  };

  const handleChangeDocumento = (event) => {
    setDocumentoConsulta(event.target.value);
  };

  useEffect(() => {
    obtenerEstudiantes();
  }, []);

  return (
    <div className="container">
      <FormularioConsulta
        documentoConsulta={documentoConsulta}
        onChangeDocumento={handleChangeDocumento}
        onSubmit={handleConsulta}
      />
      <MensajeError error={error} />
      {estudianteEncontrado && <InformacionEstudiante estudiante={estudianteEncontrado} />}
    </div>
  );
}

export default Consulta;





