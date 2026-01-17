import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Mission from "@/pages/Mission";
import Contact from "@/pages/Contact";
import LegalResearch from "@/pages/LegalResearch";
import Evidence from "@/pages/Evidence";
import PropheticPapers from "@/pages/PropheticPapers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mission" component={Mission} />
      <Route path="/research" component={LegalResearch} />
      <Route path="/evidence" component={Evidence} />
      <Route path="/prophetic-papers" component={PropheticPapers} />
      <Route path="/contact" component={Contact} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
