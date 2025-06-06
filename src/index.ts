import express, {Request, Response} from 'express';
import supabaseClient from './config/supabaseClient';



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');

});

// Route 2: Test Supabase Database Connection
app.get('/test-db', async (req: Request, res: Response) => {
    try {
        // Use the imported supabaseClient instance
        const { data, error } = await supabaseClient.from('products').select('*').limit(1);

        if (error) {
            console.error('Supabase query error:', error.message);
            return res.status(500).json({ ok: false, error: error.message });
        }
        console.log ('Connection to Supabase successful');
        console.log('Supabase query successful. Data:', data);
        res.json({ ok: true, data });
    } catch (err: any) { // Type 'any' for 'err' in catch block for broader error handling
        console.error('Unexpected error during Supabase /test-db route:', err.message);
        res.status(500).json({ ok: false, error: 'Unexpected error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

