import { Typography } from '@mui/material'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

const style = {
  width: '200px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

const Description = (props: { description: string }) => {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      {props.description && (
        <>
          <Typography
            variant="body2"
            color="black"
            sx={hidden ? style : { whiteSpace: 'normal' }}
          >
            {props.description}
          </Typography>
          <Typography
            variant="body2"
            color="#2196f3"
            sx={{ cursor: 'pointer' }}
            onClick={() => setHidden(previous => !previous)}
          >
            {hidden ? (
              <FormattedMessage
                id="generic.label.see.more"
                defaultMessage="See more "
              />
            ) : (
              <FormattedMessage
                id="generic.label.hide"
                defaultMessage="Hide "
              />
            )}
          </Typography>
        </>
      )}
    </>
  )
}

export default Description
