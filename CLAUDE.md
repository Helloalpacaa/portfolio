# Portfolio Project Information

## Database Management
- **Database Console**: https://console.neon.tech/app/projects/polished-dew-96174827/branches/br-summer-bar-a85fp0cc/tables?database=neondb
- **Local Database Access**: `npx prisma studio` (opens web interface for local database management)

## Deployment
- **Vercel Deployment Dashboard**: https://vercel.com/heidis-projects-35836ea6/portfolio/deployments

## Project Structure
- Projects are stored in a PostgreSQL database using Prisma ORM
- Project data includes: title, description, category, githubUrl, liveUrl, image, stack, etc.
- Projects are fetched via API endpoint: `/api/projects`
- Frontend displays projects with filtering by category (Web Development, Mobile Development)

## Common Commands
- `npx prisma studio` - Open database management interface
- `npx prisma generate` - Generate Prisma client after schema changes
- `npx prisma db push` - Push schema changes to database

## Git Commit Guidelines
- **NO Claude attribution messages** in commit messages
- Keep commits clean and professional
- Format: Brief description on first line, detailed explanation if needed

## Database Insert Format
To add a new project via Neon SQL Editor:

```sql
INSERT INTO "Project" (
    id,
    title,
    category,
    description,
    num,
    stack,
    "liveUrl",
    "githubUrl",
    image,
    featured,
    "createdAt",
    "updatedAt"
  ) VALUES (
    gen_random_uuid()::text,
    'Project Title',
    'Web Development', -- or 'Mobile Development'
    'Project description here',
    '0X', -- Project number as string
    ARRAY['Tech1', 'Tech2', 'Tech3'], -- Technologies used
    'https://live-url.com', -- or empty string ''
    'https://github.com/username/repo',
    '/assets/projects/ProjectName.jpg',
    false, -- featured flag
    NOW(),
    NOW()
  );
```