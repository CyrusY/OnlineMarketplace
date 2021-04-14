import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { FaWindows } from 'react-icons/fa'


function ActivationEmail() {
    const {activation_token} = useParams()
    

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    console.log(activation_token)
                    const res = await axios.post('/users/activation', {activation_token})
        console.log(activation_token)
                } catch (err) {

                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <div className="active_page">
       
       <meta http-equiv="refresh" content="0.1; URL=/" />
        </div>
    )
}

export default ActivationEmail
