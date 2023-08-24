import React, { useState } from "react";

// if there's a component in the HubSpot library you want to use, you MUST import it here in this object.
import {
  Divider,
  Link,
  Button,
  Text,
  Input,
  Flex,
  hubspot,
} from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

// Define the Extension component, taking in runServerless, context, & sendAlert as props
const Extension = ({ context, runServerless, sendAlert }) => {

  // set a state object
  const [text, setText] = useState("");

  // Call serverless function to execute with parameters.
  // The `myFunc` function name is configured inside `serverless.json`
  const handleClick = () => {
    runServerless({ name: "myFunc", parameters: { text: text } }).then((resp) =>
      sendAlert({ message: resp.response })
    );
  };


  // Put all of the extra logic you need in here!

  // In React, everything that is rendered needs to be in the "return" function as seen below.
  return (
    <>
      <Text>
        <Text format={{ fontWeight: "bold" }}>
          Your first UI extension is ready!
        </Text>
        Congratulations, {context.user.firstName}! You just deployed your first
        HubSpot UI extension. This example demonstrates how you would send
        parameters from your React frontend to the serverless function and get a
        response back.
      </Text>
      <Flex direction="row" align="end" gap="small">
        <Input name="text" label="Send" onInput={(t) => setText(t)} />
        <Button type="submit" onClick={handleClick}>
          Click me
        </Button>
      </Flex>
      <Divider />
      <Text>
        What now? Explore all available{" "}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extension-components">
          UI components
        </Link>
        , get an overview of{" "}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extensions-overview">
          UI extensions
        </Link>
        , learn how to{" "}
        <Link href="https://developers.hubspot.com/docs/platform/create-ui-extensions">
          add a new custom card
        </Link>
        , jump right in with our{" "}
        <Link href="https://developers.hubspot.com/docs/platform/ui-extensions-quickstart">
          Quickstart Guide
        </Link>
        , or check out our{" "}
        <Link href="https://github.com/HubSpot/ui-extensions-react-examples">
          code Samples
        </Link>
        .
      </Text>
    </>
  );
};
