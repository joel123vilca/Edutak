import React from 'react';
import './precios.css';

function  Precios() {
    return (
      <div className="pricing-wrapper clearfix">

		<h1 className="pricing-table-title">Precios </h1>
    
		<div className="pricing-table">
			<h3 className="pricing-title">Basico</h3>
			<div className="price">$60<sup>/ mes</sup></div>

			<ul className="table-list">
				<li>10 GB <span>De almacenamiento</span></li>
				<li>1 Dominio <span>incluido</span></li>
				<li>25 GB <span>De transferencia mensual</span></li>
				<li>Base de datos <span className="unlimited">ilimitadas</span></li>
				<li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
				<li>CPanel <span>incluido</span></li>
			</ul>

			<div className="table-buy">
				<p>$60<sup>/ mes</sup></p>
				<a href="#" className="pricing-action">Comprar</a>
			</div>
		</div>

		<div className="pricing-table recommended">
			<h3 className="pricing-title">Premium</h3>
			<div className="price">$100<sup>/ mes</sup></div>

			<ul className="table-list">
				<li>35 GB <span>De almacenamiento</span></li>
				<li>5 Dominios <span>incluidos</span></li>
				<li>100 GB <span>De transferencia mensual</span></li>
				<li>Base de datos <span className="unlimited">ilimitadas</span></li>
				<li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
				<li>CPanel <span>incluido</span></li>
			</ul>

			<div className="table-buy">
				<p>$100<sup>/ mes</sup></p>
				<a href="#" className="pricing-action">Comprar</a>
			</div>
		</div>

		<div className="pricing-table">
			<h3 className="pricing-title">Ultimate</h3>
			<div className="price">$200<sup>/ mes</sup></div>

			<ul className="table-list">
				<li>100 GB <span>De almacenamiento</span></li>
				<li>8 Dominios <span>incluidos</span></li>
				<li>200 GB <span>De transferencia mensual</span></li>
				<li>Base de datos <span className="unlimited">ilimitadas</span></li>
				<li>Cuentas de correo <span className="unlimited">ilimitadas</span></li>
				<li>CPanel <span>incluido</span></li>
			</ul>

			<div className="table-buy">
				<p>$200<sup>/ mes</sup></p>
				<a href="#" className="pricing-action">Comprar</a>
			</div>
		</div>
	</div>
    )

}

export default Precios;
