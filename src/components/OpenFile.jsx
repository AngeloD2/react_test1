import { useNavigate } from "react-router-dom";

export default function OpenFile({ url }) {
  const navigate = useNavigate();

  // Get the platform information
  const platform = window.navigator.platform.toLowerCase();

  // Check if the platform is Mac or Windows
  const isMac = platform.includes("mac");

  // Set the file path based on the platform
  const filePath = isMac ? url.replace(/\\/g, "/") : url.replace(/\//g, "\\");

  return (
    <p
      onClick={async () => {
        try {
          const response = await fetch(
            `http://localhost:3001/open-file?filePath=${encodeURIComponent(
              filePath
            )}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.text();
          console.log("File opened successfully:", data);
          if (filePath === "./tests/Test6.jsx") {
            navigate("/ui/1");
          }
          if (filePath === "./tests/Test7.jsx") {
            navigate("/ui/2");
          }
        } catch (error) {
          console.error(`Error opening file: ${error}`);
        }
      }}
    >
      <u className="text-orange-200 cursor-pointer">Click here to get started.</u>
    </p>
  );
}
