import React from 'react'
import ReactDOM from 'react-dom'

import  { Vendedor, Cliente, PiorVendedor, MelhorVenda } from './componentes/Multi'

function counter(lista){
	return lista.length;
}
function worseVndor(lista){
	let salary = lista[0][3]
	let worse = lista[0][2]
	for(let i = 0; i < lista.length; i++ ){
		if(salary >lista[i][3]){
			salary = lista[i][3]
			worse = lista[i][2]
		}		
	}
	return worse;
}
function bestSale(lista){
	let best

	for(let i = 0; i < lista.length; i++ ){
		if(best < lista[i][0]){
			best = lista[i][0]
		}		
	}
	return best;
}

const input =
document.querySelector('input[type="file"]')
input.addEventListener('change', function(e) {
        console.log(input.files)

		var vnda = []
		var vndor = []
		var client = []

        const reader = new FileReader()
        reader.onload = function () {
            const lines = reader.result.split(/[\r\n]+/g).map(function (line){
                return line.split('ç')
			})

            for(let i = 0; i < lines.length; i++){
				for (let j = 0; j < lines[i].length; j++)
				{
					if(lines[i][j] === "001"){
						vndor.push(lines[i])
					}
					else if(lines[i][j] === "002"){
						client.push(lines[i])
					}
					else if(lines[i][j] === "003"){
						vnda.push(lines[i])
					}
				}
            }

			var vendedores = counter(vndor)
			var clientes = counter(client)
			var piorVendedor = worseVndor(vndor)
			var venda = 10 //bestSale(vnda) 


            ReactDOM.render(
                <div>
                    <Cliente nome="Número de Clientes" valor={clientes}/>
                    <Vendedor nome="Número de Vendedores" valor={vendedores}/>
                    <PiorVendedor nome="Pior Vendedor" valor={piorVendedor}/>
                    <MelhorVenda nome="ID da Melhor Venda" valor={venda}/>
                </div>
            , document.getElementById('root'))

			console.log(lines)
        }
        reader.readAsText(input.files[0])
} ,false)
