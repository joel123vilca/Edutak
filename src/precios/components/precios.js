import React from 'react';
import './precios.css';

function  Precios() {
    return (
      <div className="Precios">
      <div className="precio-wrapper clearfix">
		    <h1 className="precio-table-title">Precios </h1>

		      <div className="precio-table recommended">
			<h3 className="precio-title">Junio-Julio</h3>
			<div className="precio">S/.80</div>

			<ul className="table-list">
				<li>Estudiantes <span className="unlimited">S/.80.00</span></li>
				<li>Profesionales <span className="unlimited" >S/.100.00</span></li>
				<li className="Oferta">Grupos de mas de 5:</li>
				<li className="Oferta">Estudiantes: <span>S/.75.00</span></li>
        <li>Numero de cuenta</li>
				<li>Banco de la Nacion: <span> 04-529-428036</span></li>
			</ul>

			<div className="table-buy">
				<a href="#" className="precio-action">Inscribirse</a>
			</div>
		</div>

		<div className="precio-table">
			<h3 className="precio-title">Agosto - Setiembre</h3>
			<div className="precio">S/.100</div>

      <ul className="table-list">
        <li>Estudiantes <span className="unlimited">S/.100.00</span></li>
        <li>Profesionales <span className="unlimited" >S/.110.00</span></li>
        <li className="Oferta">Grupos de mas de 5:</li>
        <li className="Oferta">Estudiantes: <span>S/.90.00</span></li>
        <li>Numero de cuenta</li>
        <li>Banco de la Nacion: <span> 04-529-428036</span></li>
      </ul>

			<div className="table-buy">
				<a href="#" className="precio-action">Inscribirse</a>
			</div>
		</div>

		<div className="precio-table">
			<h3 className="precio-title">Noviembre</h3>
			<div className="precio">S/.120</div>

      <ul className="table-list">
        <li>Estudiantes <span className="unlimited">S/.120.00</span></li>
        <li>Profesionales <span className="unlimited" >S/.130.00</span></li>
        <li className="Oferta">Grupos de mas de 5:</li>
        <li className="Oferta">Estudiantes: <span>S/.110.00</span></li>
        <li>Numero de cuenta</li>
        <li>Banco de la Nacion: <span> 04-529-428036</span></li>
      </ul>

			<div className="table-buy">
				<a href="#" className="precio-action">Inscribirse</a>
			</div>
		</div>
	</div>
  </div>
    )

}

export default Precios;
