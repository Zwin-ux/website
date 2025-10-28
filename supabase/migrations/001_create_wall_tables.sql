-- Create marks table
CREATE TABLE marks (
  id SERIAL PRIMARY KEY,
  user_hash TEXT NOT NULL,
  handle TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('text', 'image')),
  text_content TEXT,
  image_url TEXT,
  x INTEGER NOT NULL,
  y INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_flagged BOOLEAN NOT NULL DEFAULT FALSE,

  -- Constraints
  CONSTRAINT user_hash_unique UNIQUE (user_hash),
  CONSTRAINT text_content_required CHECK (
    (content_type = 'text' AND text_content IS NOT NULL) OR
    (content_type = 'image' AND image_url IS NOT NULL)
  )
);

-- Create indexes
CREATE INDEX idx_marks_created_at ON marks(created_at);
CREATE INDEX idx_marks_user_hash ON marks(user_hash);
CREATE INDEX idx_marks_is_flagged ON marks(is_flagged);

-- Create flags table
CREATE TABLE flags (
  id SERIAL PRIMARY KEY,
  mark_id INTEGER NOT NULL REFERENCES marks(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for flags
CREATE INDEX idx_flags_mark_id ON flags(mark_id);
CREATE INDEX idx_flags_created_at ON flags(created_at);

-- Enable Row Level Security
ALTER TABLE marks ENABLE ROW LEVEL SECURITY;
ALTER TABLE flags ENABLE ROW LEVEL SECURITY;

-- RLS Policies for marks table

-- Policy: Anyone can view all marks
CREATE POLICY "Public read access" ON marks
  FOR SELECT
  USING (true);

-- Policy: Anyone can insert one mark (enforcement done in API)
CREATE POLICY "Public insert access" ON marks
  FOR INSERT
  WITH CHECK (true);

-- Policy: No updates allowed
-- (No policy = no one can update)

-- Policy: No deletes allowed (except cascade from flags)
-- (No policy = no one can delete)

-- RLS Policies for flags table

-- Policy: Anyone can view flags (for moderation transparency)
CREATE POLICY "Public read flags" ON flags
  FOR SELECT
  USING (true);

-- Policy: Anyone can insert flags
CREATE POLICY "Public insert flags" ON flags
  FOR INSERT
  WITH CHECK (true);

-- Create a function to update is_flagged when a flag is inserted
CREATE OR REPLACE FUNCTION update_mark_flagged()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE marks SET is_flagged = true WHERE id = NEW.mark_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically set is_flagged=true when a flag is created
CREATE TRIGGER trigger_update_mark_flagged
  AFTER INSERT ON flags
  FOR EACH ROW
  EXECUTE FUNCTION update_mark_flagged();

-- Comments for documentation
COMMENT ON TABLE marks IS 'Stores all marks left on The Wall. Each user_hash can only have one mark.';
COMMENT ON COLUMN marks.user_hash IS 'SHA-256 hash of IP + User-Agent. Enforces one mark per human.';
COMMENT ON COLUMN marks.x IS 'X coordinate on 5000x5000 canvas grid';
COMMENT ON COLUMN marks.y IS 'Y coordinate on 5000x5000 canvas grid';
COMMENT ON TABLE flags IS 'Stores flags for inappropriate content. Automatically sets is_flagged=true on parent mark.';
