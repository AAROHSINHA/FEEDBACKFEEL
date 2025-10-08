import { BookmarkIcon } from "./BookmarkIcon";

interface BookmarkButtonInterface {
  bookmarked: boolean;
  text: string;
  sentiment: string;
}

export default function BookmarkButton({
  bookmarked,
  text,
  sentiment,
}: BookmarkButtonInterface) {
  const handleClick = () => {
    console.log(text, sentiment);
  };
  return (
    <button
      type="button"
      title={bookmarked ? "Bookmarked" : "Bookmark"}
      className="inline-flex items-center justify-center p-1.5 rounded-md hover:bg-[#262628] transition-colors hover:cursor-pointer"
      onClick={handleClick}
    >
      <BookmarkIcon
        className="h-5 w-5"
        fill={bookmarked ? "#f5c542" : "none"}
        stroke={bookmarked ? "#f5c542" : "#a6a6a6"}
      />
      <span className="sr-only">
        {bookmarked ? "Bookmarked" : "Not bookmarked"}
      </span>
    </button>
  );
}
