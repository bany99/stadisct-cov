import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from '@/components/Bootstrap';

export const metadata = {
  title: 'Examen',
  description: 'Examen',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Contenido */}
        <main className="container">{children}</main>

        <Bootstrap />
      </body>
    </html>
  );
}
