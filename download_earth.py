import os
import requests

textures = {
    "earth_daymap.jpg": "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "earth_normal.jpg": "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    "earth_specular.jpg": "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"
}

output_dir = "public/planet"
os.makedirs(output_dir, exist_ok=True)

for filename, url in textures.items():
    print(f"Downloading {filename}...")
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(os.path.join(output_dir, filename), 'wb') as f:
            f.write(response.content)
        print("Success.")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
