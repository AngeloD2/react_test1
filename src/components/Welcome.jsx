import { useNavigate } from "react-router-dom";
import {
  Paper,
  Button,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box className="flex items-center min-h-dvh h-dvh w-full">
        <Paper variant="elevation" className="w-full h-3/4 md:h-1/2 px-4">
          <h2 className="text-center h-1/2 md:h-1/3 py-8 text-3xl">
            React Test Suite
          </h2>
          <Stack direction={'column'} spacing={2} className="h-1/5 md:h-1/3 flex items-center">
            <Button
              variant="outlined"
              className="md:w-1/3 w-full"
              onClick={() => navigate("dataprops")}
            >
              Data & Props
            </Button>
            <Button variant="outlined" className="md:w-1/3 w-full"  onClick={() => navigate("state")}>
              State
            </Button>
            <Button variant="outlined" className="md:w-1/3 w-full"  onClick={() => navigate("ui")}>
              UI
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

// <div className="w-screen h-screen flex justify-center items-center p-8 md:p-0 bg-gradient-to-t from-stone-100 to-slate-50 text-white">
//   <div className="container flex flex-col items-center justify-center w-full h-full md:w-1/2 md:h-2/3 bg-stone-50 shadow-sm">
//     <h1 className="w-full text-center text-2xl text-stone-800">
//       React Test Suite
//     </h1>

//     <div className="flex flex-col items-center justify-center h-2/3 w-full px-4">
//       <div className="w-full flex flex-col items-center justify-center h-auto space-y-14">
//         <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-around w-full gap-x-2">
//           <button
//             onClick={() => navigate("beginner")}
//             className={styles.btn}
//           >
//             Beginner
//           </button>
//           <button
//             onClick={() => navigate("entry")}
//             className={styles.btn}
//           >
//             Entry
//           </button>

//           <button
//             onClick={() => navigate("ui")}
//             className={styles.btn}
//           >
//             UI
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
