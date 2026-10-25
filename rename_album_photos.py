import argparse
from datetime import datetime
from pathlib import Path
import exifread

SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg"}

# Add the exact filenames of album cover images you want to exclude.
EXCLUDED_FILES = {
    "album_info.md",
    "AlbumThumbnail.JPG",
    "AlbumThumbnail.JPEG",
    "AlbumThumbnail.jpeg",
    "AlbumThumbnail.jpg",
    "AlbumThumbnail.PNG",
}

# Attempt to grab the time recorded when the image was taken, formatted by year month day hour minute second
def get_date_taken(image_path: Path):
    # Open the image file to read the date with the EXIF reader package
    try:
        with image_path.open("rb") as file:
            tags = exifread.process_file(file, details=False)
    except Exception as error:
        print(f"Could not read EXIF data for {image_path.name}: {error}")
        return None

    # Check these tags to build the time to return
    for tag_name in (
        "EXIF DateTimeOriginal",
        "EXIF DateTimeDigitized",
        "Image DateTime",
    ):
        tag_value = tags.get(tag_name)
        # Skip missing or empty tags.
        if tag_value is None or not str(tag_value).strip():
            continue

        try:
            return datetime.strptime(
                str(tag_value).strip(),
                "%Y:%m:%d %H:%M:%S",
            )
        except ValueError:
            # This tag wasn't a valid date. Try the next one.
            continue
    return None

def get_filename(date_taken: datetime, extension: str) -> str:
    timestamp = date_taken.strftime("%Y-%m-%d_%H%M%S")
    return f"{timestamp}{extension.lower()}"

# Actual running loop to look at each file and rename it
def rename_photos(folder: Path, dry_run: bool = True):
    folder = folder.expanduser().resolve()

    # Ensure its a folder
    if not folder.is_dir():
        raise ValueError(f"Folder does not exist: {folder}")

    # Format excluded files
    excluded = {name.lower() for name in EXCLUDED_FILES}

    # Grab files directly inside the specified folder
    for image_path in sorted(folder.iterdir()):
        if not image_path.is_file():
            continue

        if image_path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue

        # Don't grab excluded files
        if image_path.name.lower() in excluded:
            print(f"Skipping cover: {image_path.name}")
            continue

        # Get the actual date and time
        date_taken = get_date_taken(image_path)

        #If for any reason, we can't get exif data, skip
        if date_taken is None:
            print(f"Skipping (no EXIF date): {image_path.name}")
            continue

        # Build the new named file
        new_name = get_filename(date_taken, image_path.suffix)
        new_path = image_path.with_name(new_name)

        # Avoid overwriting existing files with the same timestamp.
        counter = 1
        while new_path.exists() and new_path.resolve() != image_path.resolve():
            timestamp = date_taken.strftime("%Y-%m-%d_%H%M%S")
            new_name = (
                f"{timestamp}_{counter}{image_path.suffix.lower()}"
            )
            new_path = image_path.with_name(new_name)
            counter += 1

        if new_path.resolve() == image_path.resolve():
            print(f"Already correctly named: {image_path.name}")
            continue

        print(f"{image_path.name} -> {new_path.name}")

        # If this is not a dry run, actually rename the files
        if not dry_run:
            image_path.rename(new_path)

    if dry_run:
        print("\nPreview only. No files were renamed.")
        print("Run again with --rename to apply the changes.")



if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "folder",
        type=Path,
        help="Path to the album folder to process",
    )

    parser.add_argument(
        "--rename",
        action="store_true",
        help="Actually rename files (default is preview only)",
    )

    args = parser.parse_args()

    rename_photos(args.folder, dry_run=not args.rename)