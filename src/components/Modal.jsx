import React from 'react';

const formatDate = (dateString) => {
  if (!dateString) return 'No disponible';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(new Date(dateString));
};

const formatNumber = (number) => {
  if (number === null || number === undefined) return 'No disponible';
  const options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  return new Intl.NumberFormat('en-US', options).format(number);
};

const Modal = ({ provinciaSeleccionada, reporte, loading }) => {
  return (
    <div
      className="modal fade"
      id="reportModal"
      tabIndex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content shadow-lg rounded-3">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold" id="reportModalLabel">
              📊 Reporte de {provinciaSeleccionada?.province || 'Provincia'}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            ) : reporte ? (
              <div className="row g-3">
                <div className="col-12">
                  <p className="mb-1">
                    <strong>📅 Fecha:</strong> {formatDate(reporte.date)}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>🦠 Casos Confirmados:</strong>{' '}
                    {formatNumber(reporte.confirmed)}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>⚰️ Muertes:</strong>{' '}
                    {formatNumber(reporte.deaths)}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>💪 Recuperados:</strong>{' '}
                    {formatNumber(reporte.recovered)}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>📉 Tasa de Fatalidad:</strong>{' '}
                    {reporte.fatality_rate
                      ? `${(reporte.fatality_rate * 100).toFixed(2)}%`
                      : 'No disponible'}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center text-muted">
                No hay datos disponibles para esta provincia.
              </p>
            )}
          </div>
          <div className="modal-footer bg-light">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
