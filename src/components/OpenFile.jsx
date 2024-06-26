import { Box, Typography } from "@mui/material";

export default function OpenFile({ url }) {

  // Get the platform information
  const platform = window.navigator.platform.toLowerCase();

  // Check if the platform is Mac or Windows
  const isMac = platform.includes("mac");

  // Set the file path based on the platform
  const filePath = isMac ? url.replace(/\\/g, "/") : url.replace(/\//g, "\\");

  async function open() {
    try {
      console.log(filePath);
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
    } catch (error) {
      console.error(`Error opening file: ${error}`);
    }
  }
  return (
    <Box className="bg-blue-500 bg-clip-text underline underline-offset-4 decoration-blue-500 hover:bg-blue-700 transition-all">
      <Typography
        variant="h6"
        className="text-transparent cursor-pointer underline"
        onClick={open}
      >
        Click here to get started.
      </Typography>
    </Box>
  );
}
