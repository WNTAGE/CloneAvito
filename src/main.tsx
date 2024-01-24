import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./Utils/helpers/i18/i18n";
import "./index.css";
import Home from "./views/Home/Home";
import Header from "./сomponents/Header/Header";
import SignUp from "./views/Auth/SignUp";
import SignIn from "./views/Auth/signIn";
import PersonalCabinet from "@/views/PersonalCabinet/personalCabinet";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<Home />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="personalCabinet" element={<PersonalCabinet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
);
