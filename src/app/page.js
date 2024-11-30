'use client';
import { useEffect, useState } from 'react';
import Tabla from '@/components/Tabla';
import Modal from '@/components/Modal';

export default function Home() {
  // Variables de estado
  const [provincias, setProvincias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(null);
  const [reporte, setReporte] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  // Consumir API de provincias en USA
  useEffect(() => {
    async function fetchProvincias() {
      setLoading(true);
      const response = await fetch(
        'https://covid-19-statistics.p.rapidapi.com/provinces?iso=USA',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '2505eda46amshc60713983b5e807p1da25ajsn36febcbf4a71',
            'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      setProvincias(data.data);
      setLoading(false);
    }

    fetchProvincias();
  }, []);

  // Consumir API de reportes por provincia
  const handleViewReport = async (province) => {
    setProvinciaSeleccionada(province);
    setModalLoading(true);

    try {
      const response = await fetch(
        'https://covid-19-statistics.p.rapidapi.com/reports',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '2505eda46amshc60713983b5e807p1da25ajsn36febcbf4a71',
            'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      setReporte(data.data[0]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <>
      <h1 className="my-4 text-center">Provincias en USA</h1>

      <Tabla
        provincias={provincias}
        loading={loading}
        onViewReport={handleViewReport}
      />
      
      <Modal
        provinciaSeleccionada={provinciaSeleccionada}
        reporte={reporte}
        loading={modalLoading}
      />
    </>
  );
}
