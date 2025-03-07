import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NavHeader from "@/components/nav-header";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import CaseStudy from "@/pages/case-study";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import PageTransition from "@/components/page-transition";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageTransition>
        <NavHeader />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/case-study/:id" component={CaseStudy} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <Toaster />
      </PageTransition>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
