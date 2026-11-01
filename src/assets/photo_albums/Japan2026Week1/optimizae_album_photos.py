# Made with AI, full discolsure
import argparse
from pathlib import Path
from PIL import Image, ImageOps

SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png"}

MAX_SIZE = (2000, 2000)
QUALITY = 88

def optimize_photos(folder: Path):
    folder = folder.expanduser().resolve()

    if not folder.is_dir():
        raise ValueError(f"Folder does not exist: {folder}")

    # Save optimized images in a separate folder
    output_folder = folder / "web"
    output_folder.mkdir(exist_ok=True)

    for image_path in sorted(folder.iterdir()):
        if not image_path.is_file():
            continue

        if image_path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue

        try:
            with Image.open(image_path) as image:
                # Correct image orientation using EXIF
                image = ImageOps.exif_transpose(image)

                # Resize while maintaining aspect ratio
                image.thumbnail(
                    MAX_SIZE,
                    Image.Resampling.LANCZOS
                )

                # Preserve transparency where applicable
                if image.mode not in ("RGBA", "LA"):
                    image = image.convert("RGB")

                # Create WebP output path
                new_path = output_folder / (
                    image_path.stem + ".webp"
                )

                # Export optimized image
                image.save(
                    new_path,
                    "WEBP",
                    quality=QUALITY,
                    method=6
                )

                original_size = image_path.stat().st_size / 1024
                optimized_size = new_path.stat().st_size / 1024

                reduction = (
                    1 - optimized_size / original_size
                ) * 100

                print(
                    f"{image_path.name}: "
                    f"{original_size:.0f} KB -> "
                    f"{optimized_size:.0f} KB "
                    f"({reduction:.1f}% smaller)"
                )

        except Exception as error:
            print(f"Could not process {image_path.name}: {error}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "folder",
        type=Path,
        help="Album folder to optimize"
    )

    args = parser.parse_args()

    optimize_photos(args.folder)
