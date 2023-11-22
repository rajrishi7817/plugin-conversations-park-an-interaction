import React, {useState} from "react";
import styled from "styled-components";
import {Actions} from "@twilio/flex-ui";

import {PauseIcon} from "@twilio-paste/icons/esm/PauseIcon";
import {Button} from "@twilio-paste/core/button";
import {Spinner} from "@twilio-paste/core/spinner";

const IconWrapper = styled.div`
  margin: 0.8rem;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
`;

export const ParkButton = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <IconWrapper isLoading={isLoading}>
          <Spinner size="sizeIcon40" decorative={false} title="Loading" />
        </IconWrapper>
      ) : (
        <IconWrapper
          onClick={() => {
            setIsLoading(true);
            Actions.invokeAction("ParkInteraction", {task: props.task});
          }}
        >
          <Button variant="destructive">Park</Button>
          {/* <PauseIcon
            decorative={false}
            title='Pause Interaction'
            size='sizeIcon40'
          /> */}
        </IconWrapper>
      )}
    </>
  );
};
