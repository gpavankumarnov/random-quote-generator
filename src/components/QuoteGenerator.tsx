import CachedIcon from "@mui/icons-material/Cached";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { quotes } from "../data";
import { QuoteData } from "../model/QuoteData";
interface QuoteGeneratorProps {
  data: QuoteData;
  getRandomNum: () => number;
  setDialogStatus: (val: boolean) => void;
  changeQuote: (data: QuoteData) => void;
}

const QuoteGenerator = (props: QuoteGeneratorProps) => {
  const {
    data: { authorName, title },
    getRandomNum,
    setDialogStatus,
    changeQuote,
  } = props;

  
  

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{authorName}</DialogContent>
      <DialogActions>
        <Button
          onClick={() => changeQuote(quotes[getRandomNum()])}
          startIcon={<CachedIcon />}
         
        >
          Reload
        </Button>
        <Button onClick={() => setDialogStatus(false)}>Exit</Button>
      </DialogActions>
    </>
  );
};

export default QuoteGenerator;
