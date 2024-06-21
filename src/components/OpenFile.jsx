export default function OpenFile({ url }) {
  return (
    <p
      onClick={async () => {
        try {
          const response = await fetch(
            `http://localhost:3001/open-file?filePath=${encodeURIComponent(
              url
            )}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.text();
          console.log("File opened successfully:", data);
        } catch (error) {
          console.error(`Error opening file: ${error}`);
        }
      }}
    >
      <u className="text-blue-600 cursor-pointer">
        Click here to get started.
      </u>
    </p>
  );
}
