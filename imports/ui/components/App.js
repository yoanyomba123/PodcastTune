import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SideBar from "./SideBar";
import Podcasts from "./Podcasts";
import PodcastPage from "./PodcastPage";
import Discover from "./Discover";
import DiscoverByGenre from "./DiscoverByGenre";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Podcasts} />
          <Route path="/podcasts/:podcastId" component={PodcastPage} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/discover/:genreId" component={DiscoverByGenre} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
