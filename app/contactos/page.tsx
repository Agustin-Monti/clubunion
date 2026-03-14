export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-8 text-center">Contactanos</h1>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-center text-gray-600 mb-8">
          ¿Querés ser socio, sponsor, o tenés alguna consulta? Escribinos y te responderemos a la brevedad.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block font-medium mb-1">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block font-medium mb-1">Mensaje</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              rows={5} 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="mb-2">
            📧 Email:{" "}
            <a 
              href="mailto:contacto@clubunionmansilla.com.ar" 
              className="text-[var(--color-primary)] hover:underline"
            >
              contacto@clubunionmansilla.com.ar
            </a>
          </p>
          <p>📱 Redes sociales: (Próximamente)</p>
        </div>
      </div>
    </div>
  );
}