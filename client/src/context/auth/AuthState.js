import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import {
	SHOW_LOADER,
	CLEAR_ERRORS,
	SENDFORM_SUCCESS,
	SENDFORM_FAIL,
	// DOWNLOAD,
} from '../types'

const AuthState = props => {
	const initialState = {
		loading: false,
		error: null,
		formSent: '',
		alerts: [],
		scroll: false,
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState)


	const sendForm = async (formData) => {
		showLoader()
		const config = {
			headers: {
				'Content-Type':'application/json',
			}
		}
		try {
			const res = await axios.post('/portfolio/sendForm', formData, config)
			dispatch ({
				type: SENDFORM_SUCCESS,
				payload: res.data
			})
		} catch (err) {
			dispatch ({
				type: SENDFORM_FAIL,
				payload: err.response.data.msg
			})
		}
	}

	// const download = async () => {
	// 	showLoader()
	// 	const config = {
	// 		headers: {
	// 			'Content-Type':'application/json',
	// 		}
	// 	}
	// 	try {
	// 		const res = await axios.get('/portfolio/download', config)
	// 		dispatch ({
	// 			type: DOWNLOAD,
	// 			payload: res.data
	// 		})
	// 	} catch (err) {
	// 		dispatch ({
	// 			type: SENDFORM_FAIL,
	// 			payload: err.response.data.msg
	// 		})
	// 	}
	// }

	const showLoader = () => dispatch({ type: SHOW_LOADER })

	const clearErrors = () => dispatch ({ type: CLEAR_ERRORS })


	return <AuthContext.Provider  // values i can use outside when i do "context."
		value = {{
			loading: state.loading,
			error: state.error,
			formSent: state.formSent,
			alerts: state.alerts,
			clearErrors,
			sendForm,
			// download,
		}}>
		{props.children}
	</AuthContext.Provider>
}

export default AuthState
