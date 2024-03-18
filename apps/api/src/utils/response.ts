import axios from 'axios';

export const axiosGet = async (method: string, access_token = '') => {
    try {
        const response = await axios.get(
            `${process.env.URL_SPOTIFY}${method}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${access_token}`,
                },
            }
        );
    
        return response.data;
    } catch (error) {
        console.log({error: error});
    }
}