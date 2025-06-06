import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../constants/database';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be defined');
}
const supabaseClient = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);

export default supabaseClient;