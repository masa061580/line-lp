import re
import json
import os

def convert_md_to_js(md_path, js_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    chapters = []
    current_chapter = None
    current_section = None
    
    lines = md_content.split('\n')
    
    # Simple state machine
    # 0: Init
    # 1: Inside Chapter
    # 2: Inside Section
    
    md_image_pattern = re.compile(r'!\[\[(.*?)\]\]')
    obsidian_image_resize_pattern = re.compile(r'!\[\[(.*?)\|(\d+)\]\]')

    def process_content(text):
        # Convert Obsidian image links to HTML img tags
        # Format: ![[filename|width]] -> <img src="/assets/filename" style="width: 100%; max-width: {width}px;" />
        
        def replacement_resize(match):
            filename = match.group(1)
            width = match.group(2)
            return f'<img src="/assets/{filename}" alt="{filename}" class="content-image" style="max-width: {width}px; width: 100%;" />'
        
        text = obsidian_image_resize_pattern.sub(replacement_resize, text)
        
        def replacement_normal(match):
            filename = match.group(1)
            return f'<img src="/assets/{filename}" alt="{filename}" class="content-image" style="width: 100%;" />'

        text = md_image_pattern.sub(replacement_normal, text)
        return text

    in_code_block = False

    for line in lines:
        # Check for code block delimiter
        if line.strip().startswith('```'):
            in_code_block = not in_code_block

        if not in_code_block and line.startswith('## Chapter'):
            # New Chapter
            title = line.strip().replace('## ', '')
            chap_id = f"chap-{len(chapters) + 1}"
            current_chapter = {
                "title": title,
                "id": chap_id,
                "sections": []
            }
            # Add Introduction section by default or wait for first content
            # Based on previous structure, Introduction might be implicit or explicit
            # Let's add a placeholder Introduction section that captures text before the first H3
            current_section = {
                "title": "Introduction",
                "content": ""
            }
            current_chapter["sections"].append(current_section)
            chapters.append(current_chapter)
            
        elif not in_code_block and line.startswith('### '):
            # New Section
            if current_chapter is None:
                continue # Skip sections before any chapter
            
            title = line.strip().replace('### ', '')
            current_section = {
                "title": title,
                "content": ""
            }
            current_chapter["sections"].append(current_section)
        
        else:
            # Content
            if current_section is not None:
                current_section["content"] += line + '\n'
            elif current_chapter is not None:
                 # Content directly under Chapter before any H3, goes to last section (Introduction)
                 if len(current_chapter["sections"]) > 0:
                     current_chapter["sections"][-1]["content"] += line + '\n'

    # Clean up content (remove leading/trailing newlines, process images)
    for chapter in chapters:
        # Remove empty Introduction if it has no content
        if len(chapter["sections"]) > 0 and chapter["sections"][0]["title"] == "Introduction":
            if not chapter["sections"][0]["content"].strip():
                 # keep it but empty? Or remove? logic in App seems to handle it.
                 pass
        
        for section in chapter["sections"]:
            section["content"] = process_content(section["content"])

    # Output JS file
    js_content = "// Auto-generated content\nexport const contentData = " + json.dumps(chapters, indent=2, ensure_ascii=False) + ";\n"
    
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully converted {md_path} to {js_path}")

# Paths
md_file = r"c:\Users\misaw\obsidian_vault\docs\prompt_collection\GenerativeAI_Prompt_Collection_Master.md"
js_file = r"c:\Users\misaw\obsidian_vault\50_coding\20260108_prompt_collection_web\src\data\content.js"

convert_md_to_js(md_file, js_file)
