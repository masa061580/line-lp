import re
import os
import shutil
import json

# Configuration
SOURCE_MD_PATH = r"c:\Users\misaw\obsidian-vault\docs\prompt_collection\GenerativeAI_Prompt_Collection_Master.md"
ATTACHMENTS_DIR = r"c:\Users\misaw\obsidian-vault\90_attachments"
PROJECT_ROOT = r"c:\Users\misaw\obsidian-vault\50_coding\20260108_prompt_collection_web"
ASSETS_DIR = os.path.join(PROJECT_ROOT, "public", "assets")
OUTPUT_JS_PATH = os.path.join(PROJECT_ROOT, "src", "data", "content.js")

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def copy_image(image_name):
    # Obsidian image format often is just filename or filename|width
    # We strip the width part if present (logic handled in regex match usually, but here we get name)
    
    # Try to find the file in attachments
    src_path = os.path.join(ATTACHMENTS_DIR, image_name)
    if os.path.exists(src_path):
        dest_path = os.path.join(ASSETS_DIR, image_name)
        ensure_dir(ASSETS_DIR)
        shutil.copy2(src_path, dest_path)
        print(f"Copied {image_name}")
        return f"/assets/{image_name}"
    else:
        print(f"Warning: Image not found {src_path}")
        return None

def parse_markdown(md_content):
    chapters = []
    current_chapter = None
    current_section = None
    
    lines = md_content.split('\n')
    
    # Regex patterns
    chapter_pattern = re.compile(r'^##\s+(Chapter\s+\d+:?.*)')
    section_pattern = re.compile(r'^###\s+(.*)')
    image_pattern = re.compile(r'!\[\[(.*?)\]\]')
    
    in_code_block = False
    
    for line in lines:
        # Toggle code block state
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            
        # Check for Chapter (only if not in code block)
        chapter_match = chapter_pattern.match(line)
        if chapter_match and not in_code_block:
            # Save previous section if exists
            if current_section and current_chapter:
                current_chapter['sections'].append(current_section)
                current_section = None
            # Save previous chapter if exists
            if current_chapter:
                chapters.append(current_chapter)
            
            current_chapter = {
                'title': chapter_match.group(1).strip(),
                'id': f"chap-{len(chapters)+1}",
                'sections': []
            }
            continue
            
        # Check for Section (only if not in code block)
        section_match = section_pattern.match(line)
        if section_match and not in_code_block:
            if current_section and current_chapter:
                current_chapter['sections'].append(current_section)
            
            current_section = {
                'title': section_match.group(1).strip(),
                'content': ""
            }
            continue
            
        # Check for Images and process them
        # Obsidian format: ![[image.png|500]] or ![[image.png]]
        def image_replacer(match):
            inner = match.group(1)
            parts = inner.split('|')
            img_name = parts[0]
            width = parts[1] if len(parts) > 1 else None
            
            web_path = copy_image(img_name)
            
            if web_path:
                style = f' style="max-width: {width}px; width: 100%;"' if width else ''
                return f'<img src="{web_path}" alt="{img_name}" class="content-image"{style} />'
            return match.group(0) # Return original if not found (or handle error)

        # Process line content
        processed_line = image_pattern.sub(image_replacer, line)
        
        # Add to current section
        if current_section:
            current_section['content'] += processed_line + "\n"
        elif current_chapter:
            # content before first section in a chapter (intro text)
            # functionality for this can be added if needed, for now ignoring or appending to a "intro" section?
            # actually, let's just create a dummy intro section if none exists
            if not current_chapter['sections']:
                 current_section = {'title': 'Introduction', 'content': processed_line + "\n"}
            else:
                 # This case shouldn't happen often if structure is strict chapter -> section
                 pass

    # Append absolute last items
    if current_section and current_chapter:
        current_chapter['sections'].append(current_section)
    if current_chapter:
        chapters.append(current_chapter)
        
    return chapters

def main():
    print("Starting Content Migration...")
    
    if not os.path.exists(SOURCE_MD_PATH):
        print(f"Error: Source file not found at {SOURCE_MD_PATH}")
        return

    with open(SOURCE_MD_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
        
    data = parse_markdown(content)
    
    js_content = f"""// Auto-generated content
export const contentData = {json.dumps(data, indent=2, ensure_ascii=False)};
"""
    
    ensure_dir(os.path.dirname(OUTPUT_JS_PATH))
    with open(OUTPUT_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"Migration Complete. Data written to {OUTPUT_JS_PATH}")

if __name__ == "__main__":
    main()
