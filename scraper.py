import os
import requests
import re
from html.parser import HTMLParser

# Target directory
output_dir = "public/images"
os.makedirs(output_dir, exist_ok=True)

# List of books from src/constants/index.js
books = [
    {"filename": "book_game.jpg", "url": "https://www.yes24.com/product/goods/44384394"},
    {"filename": "book_python.jpg", "url": "https://www.yes24.com/product/goods/43751272"},
    {"filename": "book_web.jpg", "url": "https://www.yes24.com/product/goods/23125262"},
    {"filename": "book_sqlite.jpg", "url": "https://www.yes24.com/product/goods/5058647"},
    {"filename": "book_lua.jpg", "url": "https://www.yes24.com/product/goods/3081202"},
    {"filename": "book_cpp.jpg", "url": "http://www.yes24.com/24/goods/2817935"},
    {"filename": "book_bot.jpg", "url": "https://www.yes24.com/product/goods/2549646"},
]

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.img_url = None

    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            attrs_dict = dict(attrs)
            # User specified 'img.gImg'
            if 'class' in attrs_dict and 'gImg' in attrs_dict['class']:
                self.img_url = attrs_dict.get('src')

def download_image(book):
    print(f"Processing {book['filename']}...")
    try:
        # Fetch page
        response = requests.get(book['url'], headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        
        # Parse HTML
        parser = ImageParser()
        parser.feed(response.text)
        
        if parser.img_url:
            print(f"  Found image: {parser.img_url}")
            # Download image
            img_response = requests.get(parser.img_url)
            with open(os.path.join(output_dir, book['filename']), 'wb') as f:
                f.write(img_response.content)
            print(f"  Saved to {output_dir}/{book['filename']}")
        else:
            print(f"  [Error] Could not find img.gImg in {book['url']}")
            
    except Exception as e:
        print(f"  [Failed] {e}")

if __name__ == "__main__":
    for book in books:
        download_image(book)
