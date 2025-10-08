import TextAbout from "./TextAbout";
import BookmarkButton from "./BookmarkButton";
interface FeedbackItemInterface {
  index: number;
  id: string;
  text: string;
  sentiment: string;
  date: string;
  bookmarked: boolean;
}
export default function FeedbackItem({
  index,
  id,
  text,
  sentiment,
  date,
  bookmarked,
}: FeedbackItemInterface) {
  return (
    <li
      key={id}
      role="listitem"
      className={`flex items-center gap-3 p-3 md:p-4`}
      style={{
        backgroundColor: index % 2 === 0 ? "#1c1c1d" : "#202022",
      }}
    >
      {/* Text and Date Container */}
      <TextAbout text={text} sentiment={sentiment} date={date} />

      {/* Bookmark toggle */}
      <BookmarkButton
        bookmarked={bookmarked}
        text={text}
        sentiment={sentiment}
      />
    </li>
  );
}
