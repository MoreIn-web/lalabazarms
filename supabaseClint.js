```javascript
// supabaseClient.js
// This file initializes and exports the Supabase client.
// Keep your anon/public key safe — never expose service_role keys here!

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Your Supabase project details
const supabaseUrl = 'https://gwrcvtigfgzwamwvtdcs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3cmN2dGlnZmd6d2Ftd3Z0ZGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMTY3MzksImV4cCI6MjA3NDc5MjczOX0.6cMJLCOjCRAwJzkFsj2rUVpPMi2zwXca_lq8nJPpIkg'

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Optional helper function for debugging
export async function checkConnection() {
  const { data, error } = await supabase.from('test').select('*').limit(1)
  if (error) {
    console.error('❌ Supabase connection failed:', error.message)
  } else {
    console.log('✅ Supabase connected successfully')
  }
}
```
