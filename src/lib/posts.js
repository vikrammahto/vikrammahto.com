import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Extract frontmatter
    const frontmatter = fileContents.split('---')[1];
    const metadata = {};

    frontmatter.split('\n').forEach((line) => {
      const [key, ...value] = line.split(':');
      if (key && value.length) {
        const trimmedKey = key.trim();
        const trimmedValue = value.join(':').trim().replace(/"/g, '');

        // Special handling for tags array
        if (trimmedKey === 'tags') {
          metadata[trimmedKey] = trimmedValue
            .replace(/[\[\]]/g, '') // Remove square brackets
            .split(',') // Split by comma
            .map((tag) => tag.trim()); // Trim each tag
        } else {
          metadata[trimmedKey] = trimmedValue;
        }
      }
    });

    return {
      slug: filename.replace('.mdx', ''),
      ...metadata,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Split the file into frontmatter and content
    const [_, frontmatter, content] = fileContents.split('---');

    // Parse frontmatter
    const metadata = {};
    frontmatter.split('\n').forEach((line) => {
      const [key, ...value] = line.split(':');
      if (key && value.length) {
        const trimmedKey = key.trim();
        const trimmedValue = value.join(':').trim().replace(/"/g, '');

        // Special handling for tags array
        if (trimmedKey === 'tags') {
          metadata[trimmedKey] = trimmedValue
            .replace(/[\[\]]/g, '') // Remove square brackets
            .split(',') // Split by comma
            .map((tag) => tag.trim()); // Trim each tag
        } else {
          metadata[trimmedKey] = trimmedValue;
        }
      }
    });

    // Serialize the MDX content
    const mdxSource = await serialize(content.trim(), {
      parseFrontmatter: false,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    });

    return {
      ...metadata,
      content: mdxSource,
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}
