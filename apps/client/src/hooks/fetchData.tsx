export const fetchData = async (method: string, query?: string): Promise<any> => {
    try {
        let url = `http://127.0.0.1:3000/api/v1${method}`;
        if (query) {
            url += `?query=${encodeURIComponent(query)}`;
        }
    
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error('Problemas con la respuesta');
        }
    
        return response.json();
    } catch (error) {
        // Manejar errores aquí
        console.error('error', error);
        return [];
    }
};
  