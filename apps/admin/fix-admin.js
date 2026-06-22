const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(url, key);

async function fix() {
  const hash = bcrypt.hashSync('admin123', 10);
  const { data, error } = await supabase.from('User').update({ password: hash }).eq('email', 'admin@fovea.digital');
  console.log("Update Error:", error);
  console.log("Updated with hash:", hash);
}

fix();
