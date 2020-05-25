import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Context from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql",
});
import App from "./App.js";

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
