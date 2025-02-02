import React, { useState } from "react";

const Inventario = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [montoOferta, setMontoOferta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enlaceReferido, setEnlaceReferido] = useState("");

  const searchContacts = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchTerm);
  };

  const hacerOferta = () => {
    console.log("Oferta realizada:", montoOferta, "BTC");
  };

  const enviarMensaje = () => {
    console.log("Mensaje enviado a vendedor:", mensaje);
  };

  const recargarSaldo = (satoshis) => {
    console.log("Recargando saldo:", satoshis, "Satoshis");
  };

  const loginConNostr = () => {
    console.log("Iniciando sesión con Nostr...");
  };

  const pagarConNFC = () => {
    console.log("Pagando con NFC...");
  };

  const pagarConMetaMask = () => {
    console.log("Pagando con MetaMask...");
  };

  return (
    <div className="container">
      <header>
        <h1>@bodegascali</h1>
        <p>Punto: Vereda Campoalegre, Oeste Cali, Valle, Colombia</p>
      </header>

      {/* Enlaces */}
      <div className="buttons">
        <a href="https://wa.me/573215970535" target="_blank" rel="noopener noreferrer">
          WHATSAPP
        </a>
        <a href="tel:+573215970535" target="_blank" rel="noopener noreferrer">
          LLAMAR
        </a>
      </div>

      {/* Buscador de contactos */}
      <form onSubmit={searchContacts}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar inventario..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </div>
      </form>

      {/* Inventario */}
      <section>
        <h2>Inventario</h2>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Ubicación</th>
              <th>Detalles</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                nombre: "Juguetería, Piñatería, Hogar, Salud y Belleza",
                contacto: "+573105938658",
                link: "sku-1/sku-1-18L4LbBf3e9Udq7zobRPVah3CBfvDRMaZCcuj5As8xHbgJ4rzKvBvZH1.html",
              },
              {
                id: 2,
                nombre: "DJ",
                contacto: "+573215340988",
                link: "#",
              },
              {
                id: 3,
                nombre: "DJ",
                contacto: "+573215340988",
                link: "https://co.contraentregaco.com/collections/18jcpm",
              },
            ]
              .filter((producto) =>
                producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <a href={producto.link} className="clickable" target="_blank" rel="noopener noreferrer">
                      {producto.id}
                    </a>
                  </td>
                  <td>{producto.nombre}</td>
                  <td>-</td>
                  <td>{producto.contacto}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* LNURL */}
      <a id="lnurl" href="#">Generar factura</a>

      {/* Oferta */}
      <p id="ultimaOferta">No hay ofertas aún.</p>
      <input
        type="number"
        placeholder="Ingrese BTC"
        value={montoOferta}
        onChange={(e) => setMontoOferta(e.target.value)}
      />
      <button onClick={hacerOferta}>Ofertar</button>

      {/* XMPP */}
      <input
        type="text"
        placeholder="Escribe tu mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button onClick={enviarMensaje}>Enviar</button>

      {/* Recarga */}
      <button onClick={() => recargarSaldo(10000)}>Recargar 10,000 Satoshis</button>

      {/* Nostr */}
      <button onClick={loginConNostr}>Iniciar sesión con Nostr</button>

      {/* Referido */}
      <input type="text" value={enlaceReferido} readOnly />
      <button onClick={() => navigator.clipboard.writeText(enlaceReferido)}>
        Copiar Enlace
      </button>

      {/* NFC */}
      <button onClick={pagarConNFC}>Pagar con NFC</button>

      {/* MetaMask */}
      <button onClick={pagarConMetaMask}>Pagar con MetaMask</button>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} <strong>Cordientrega</strong>
        </p>
        <p>
          Bitcoin:{" "}
          <a href="bitcoin:15gdaABbh6oZZG4kfQPXoSdqj9YMsg5RaH" target="_blank" rel="noopener noreferrer">
            15gdaABbh6oZZG4kfQPXoSdqj9YMsg5RaH
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Inventario;