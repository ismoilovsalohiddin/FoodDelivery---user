import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { QueryClientProvider } from "react-query";
import queryClient from "services/queryClient";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "components/Header/Header";

function App() {
  return <ChakraProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Header/>
      </QueryClientProvider>
    </BrowserRouter>
  </ChakraProvider>;
}

export default App;
