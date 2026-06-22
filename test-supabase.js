const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing credentials in .env");
  process.exit(1);
}

const supabase = createClient(url, key);

async function test() {
  const { data, error } = await supabase.from('User').select('*').eq('email', 'admin@fovea.digital');
  console.log("Error:", error);
  console.log("Data:", data);
}

test();
