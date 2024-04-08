// Componente reutilizable para mostrar la información del estudiante encontrado
function InformacionEstudiante({ estudiante }) {
  return (
    <div className="information">
      <h2>Información del estudiante</h2>
      <p><strong>Nombre completo:</strong> {estudiante.estudiante.nombres} {estudiante.estudiante.apellidos}</p>
      <p><strong>Número de documento:</strong> {estudiante.estudiante.num_documento}</p>
      <p><strong>Correo electrónico:</strong> {estudiante.estudiante.email}</p>
      <p><strong>Nombre del curso:</strong> {estudiante.curso.nombreCurso}</p>
      <p><strong>Nota:</strong> {estudiante.aprobado ? 'Aprobado' : 'Reprobado'}</p>
    </div>
  );
}

export default InformacionEstudiante;