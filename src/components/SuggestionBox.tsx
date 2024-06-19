import axios from "axios";
import { FiStar } from "react-icons/fi";
import { Toggle } from "./ui/toggle";

export function SuggetionBox({
  showSuggestions,
  suggestions,
  handleSuggestionClick,
  error,
}: {
  showSuggestions: boolean;
  suggestions: string[];
  handleSuggestionClick: (item: string) => void;
  error: string;
}) {
  const handleCLick = async (item: any) => {
    try {
      await axios.post("http://localhost:3001/fav", { name: item });
      window.location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      {((showSuggestions && suggestions.length > 1) || error) && (
        <ul className="mb-4 bg-white absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">
          {error && suggestions.length < 1 && (
            <li className="text-red-500 p-1 "> {error}</li>
          )}
          {suggestions.map((item, i) => (
            <>
              <div className="flex justify-evenly">
                <li
                  key={i}
                  onClick={() => handleSuggestionClick(item)}
                  className="cursor-pointer p-1 rounded   hover:bg-gray-200"
                >
                  {item}
                </li>

                <button onClick={() => handleCLick(item)}>
                  <Toggle aria-label="Toggle bold">
                    <FiStar />
                  </Toggle>
                </button>
              </div>
            </>
          ))}
        </ul>
      )}
    </>
  );
}
