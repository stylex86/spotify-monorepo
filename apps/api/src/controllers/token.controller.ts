
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export async function getToken() {
  try {
    const response = await axios.post(
        `${process.env.URL_SPOTIFY_TOKEN}`,
        new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
            },
        }
    );

    const tokenResponse : TokenResponse = response.data;
    return tokenResponse;

  } catch (error) {
      console.error('Error al obtener el token:', error);
      throw error;
  }
}