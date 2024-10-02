import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import QuoteGenerator from "../components/QuoteGenerator";
import { getRandomNum, quotes } from "../data";
import { QuoteData } from "../model/QuoteData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background: "#90AEAD";
  
`;

const RandomQuoteGen = () => {
    
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [data, setData] = useState<QuoteData>(quotes[getRandomNum()]);

  
  
 

  
  const handleDialogOpen = () => {
      setIsDialogOpen(true);
    setData(quotes[getRandomNum()]);
  };

  return (
    <Wrapper>
      <Button onClick={() => handleDialogOpen()} variant="outlined">
        Generate Random Quote
      </Button>
      <Dialog
        fullWidth
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <QuoteGenerator
         data={data} 
         getRandomNum={getRandomNum} 
         setDialogStatus={setIsDialogOpen}
         changeQuote={setData}
         />
      </Dialog>
    </Wrapper>
  );
};

export default RandomQuoteGen;
