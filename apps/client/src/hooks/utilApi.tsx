const baseUrl = 'http://127.0.0.1:3002/api/v1';


export const fetchData = async (method: string, query?: string): Promise<any> => {
    try {
        let url = `${baseUrl}${method}`;
        if (query) {
            url += `?query=${encodeURIComponent(query)}`;
        }
    
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error('Problemas con la respuesta');
        }
    
        return response.json();
    } catch (error) {
        // imprimir errores
        console.error('error', error);
        return [];
    }
};

export const putData = async (method: string, id: string, body?: any): Promise<any> => {
    try {
        let url = `${baseUrl}${method}/${id}`;
    
        const requestBody = body ? JSON.stringify(body) : '{}';
        const requestOptions: RequestInit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // body es optativo
            body: requestBody
        };
    
        const response = await fetch(url, requestOptions);
    
        if (!response.ok) {
            throw new Error('Problemas con la respuesta');
        }
    
        return response.json();
    } catch (error) {
        // imprimir errores
        console.error('error', error);
        return [];
    }
};