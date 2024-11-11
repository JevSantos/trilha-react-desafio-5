import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nuareafrukmnjnaakplk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bmdjYnBkbXRpYWlyb2dhZXZhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTM1NDQ5OSwiZXhwIjoyMDQ2OTMwNDk5fQ.Lv2sfoyxHnhluSxf_v2fRzHGfn8TH-F9IfWHAv3xH5g",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bmdjYnBkbXRpYWlyb2dhZXZhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTM1NDQ5OSwiZXhwIjoyMDQ2OTMwNDk5fQ.Lv2sfoyxHnhluSxf_v2fRzHGfn8TH-F9IfWHAv3xH5g"
    }
})