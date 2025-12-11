import os
import requests

icons = {
    "vue.png": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    "nuxt.png": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
    "typescript.png": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "javascript.png": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "python.png": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "cpp.png": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "threejs.png": "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png",
    "tailwind.png": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "git.png": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
}
# Using SVGs might satisfy useTexture if supported, but typically raster is safer.
# useTexture in R3F supports SVG via loader but might need config.
# Ideally I should download PNGs. Or I can let the browser handle SVG if supported by TextureLoader.
# Three.js TextureLoader supports SVG but it renders as raster.
# Let's try to find PNGs for safety or generic URLs.
# Actually, let's stick to these. If they fail, I'll switch.
# Wait, simple Python requests won't rasterize SVG to PNG.
# I will use PNG URLs where possible.

icons_png = {
    "vue.png": "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png",
    "nuxt.png": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nuxt-js-icon.png",
    "typescript.png": "https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png",
    "javascript.png": "https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png",
    "python.png": "https://cdn.iconscout.com/icon/free/png-256/free-python-2-226051.png",
    "cpp.png": "https://cdn.iconscout.com/icon/free/png-256/free-c-plus-plus-1175184.png",
    "threejs.png": "https://cdn.iconscout.com/icon/free/png-256/free-three-js-logo-icon-download-in-svg-png-gif-file-formats--word-mark-programming-langugae-freebies-pack-logos-icons-1175133.png",
    "tailwind.png": "https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png",
    "git.png": "https://cdn.iconscout.com/icon/free/png-256/free-git-17-1175218.png"
}

output_dir = "public/tech"
os.makedirs(output_dir, exist_ok=True)

for filename, url in icons_png.items():
    print(f"Downloading {filename}...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        with open(os.path.join(output_dir, filename), 'wb') as f:
            f.write(response.content)
        print("Success.")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
