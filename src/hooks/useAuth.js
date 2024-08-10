import clienteAxios from "../config"
import useSWR, { mutate } from "swr"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth =  ({middleware, url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

        //Rescatar, Validar e authorizar do usuario logado e 
    const {data: user, error, mutate} = useSWR('/api/user', () => 
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(err => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login = async (dados, setErrores) => {
        try {
            const {data} = await clienteAxios.post('/api/login', dados)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([])
            await mutate()/* Revalidar a sessão do usuario */
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

    const registro = async (dados, setErrores) => {
        
        try {
            const {data} = await clienteAxios.post('/api/registro', dados)
            //console.log(data.token)
            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrores([])
            await mutate()
        } catch (error) {
            setErrores(Object.values(error.response.data.errors))
        }
    }

    const logout = async () => {
        try {
            await clienteAxios.post('/api/logout', null, {
               
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            console.log(error)
        }
    }

    //console.log(user)
    useEffect( () => {
        if(middleware === 'guest' && url && user )
        {
            navigate(url)
        }

        if(middleware === 'guest' && user && user.admin)
        {
          navigate('/admin')
        }

        if(middleware === 'guest' && user && !user.admin)
        {
            navigate('/')
        }

        if(middleware === 'auth' && error)
        {
            navigate('/auth/login')
        }
       // console.log(user)
    }, [user, error])

    return {
        login, 
        registro, 
        logout,
        user,
        error
    }

    
}