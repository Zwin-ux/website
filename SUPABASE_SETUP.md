# Supabase Setup for The Wall

Follow these steps to set up Supabase for The Wall feature.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - Project name: `bonelli-wall` (or your preference)
   - Database password: (generate a strong password and save it)
   - Region: Choose closest to your users
   - Pricing plan: Free tier is sufficient
5. Click "Create new project"
6. Wait 2-3 minutes for setup to complete

## Step 2: Get Your Credentials

Once your project is ready:

1. Go to Project Settings (gear icon in sidebar)
2. Navigate to API section
3. Copy these values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public key** (starts with `eyJ...`)

## Step 3: Create Environment Variables

Create a file named `.env.local` in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace the placeholder values with your actual Supabase credentials.

## Step 4: Run Database Migration

1. In Supabase dashboard, click "SQL Editor" in sidebar
2. Click "New Query"
3. Copy the entire contents of `supabase/migrations/001_create_wall_tables.sql`
4. Paste into the SQL editor
5. Click "Run" (or press Cmd/Ctrl + Enter)
6. Verify success message appears

## Step 5: Create Storage Bucket

1. In Supabase dashboard, click "Storage" in sidebar
2. Click "Create a new bucket"
3. Set:
   - Name: `wall-images`
   - Public bucket: **Yes** (toggle on)
   - File size limit: 5 MB
   - Allowed MIME types: `image/png,image/jpeg`
4. Click "Create bucket"

## Step 6: Configure Storage Policies

1. Click on the `wall-images` bucket
2. Go to "Policies" tab
3. Click "New Policy"
4. Choose "For full customization"
5. Create two policies:

**Policy 1: Public Read**
- Policy name: `Public read access`
- SELECT operation: enabled
- Target roles: `public`
- USING expression: `true`
- Click "Save policy"

**Policy 2: Authenticated Insert**
- Policy name: `Authenticated insert`
- INSERT operation: enabled
- Target roles: `authenticated`
- WITH CHECK expression: `true`
- Click "Save policy"

## Step 7: Verify Setup

Run your Next.js dev server:

```bash
npm run dev
```

Navigate to [http://localhost:3001/wall](http://localhost:3001/wall)

You should see The Wall interface load without errors.

## Troubleshooting

### "Invalid API key" error
- Double-check your `.env.local` file has correct values
- Restart your dev server after creating `.env.local`

### Database connection errors
- Verify the migration SQL ran successfully
- Check Project Settings > Database to confirm project is active

### Image upload fails
- Verify storage bucket is public
- Check storage policies are set correctly
- Confirm bucket name is exactly `wall-images`

## Next Steps

Once setup is complete, The Wall is ready to use. Users can:
- View all marks on the canvas
- Leave one mark (text or image)
- Flag inappropriate content

The wall will seal automatically when 1000 marks are reached.
