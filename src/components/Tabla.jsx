const Tabla = ({ provincias, loading, onViewReport }) => {
  return (
    <div className="table-responsive">
      {loading ? (
        <div className="spinner-border text-primary">
          <span className="visually-hidden">Cargando...</span>
        </div>
      ) : (
        <table className="table table-bordered table-striped mt-2">
          <thead>
            <tr className="text-center">
              <th className="col-1">No.</th>
              <th className="col-2">ISO</th>
              <th className="col-1">País</th>
              <th className="col-3">Provincia</th>
              <th className="col-2">Latitud</th>
              <th className="col-2">Longitud</th>
              <th className="col-1">Acción</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {provincias.map((province, index) => (
              <tr key={index} className=" text-center">
                <td className="col-1 align-middle">{index + 1}</td>
                <td className="col-2 align-middle">{province.iso}</td>
                <td className="col-1 align-middle">{province.name}</td>
                <td className="col-3 align-middle">{province.province}</td>
                <td className="col-2 align-middle">{province.lat}</td>
                <td className="col-2 align-middle">{province.long}</td>
                <td className="col-1 align-middle">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#reportModal"
                    onClick={() => onViewReport(province)}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tabla;
