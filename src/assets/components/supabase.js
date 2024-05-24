
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://ifxhnzylafwvxmfipwji.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeGhuenlsYWZ3dnhtZmlwd2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyODMyNTcsImV4cCI6MjAzMTg1OTI1N30.VUqvhXXzd6wEn3ld3mpaxAX97gRgsgATxVvwBiMH5Y0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase