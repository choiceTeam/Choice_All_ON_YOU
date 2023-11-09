
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uylelbewbugarahefdjv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bGVsYmV3YnVnYXJhaGVmZGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NjYxOTYsImV4cCI6MjAxNTA0MjE5Nn0.x8lBNMheBNg8ae-F0KQNSLvRJoRznRnKGrWMdffwLtE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;