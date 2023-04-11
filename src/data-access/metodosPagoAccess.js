import { handleError, processResponse } from "./accessUtils"

const HOST = process.env.REACT_APP_HOST

export const getAllMetodosPago = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/getAllByUsuario`
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${usuario.token}`,
				}
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const createMetodoPago = (metodoPago) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/create`
			const response  = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(metodoPago)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const updateMetodoPago = (metodoPago) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/update`
			const response  = await fetch(url, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(metodoPago)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const deleteMetodoPago = (metodoPago) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/delete`
			const response  = await fetch(url, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(metodoPago)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}