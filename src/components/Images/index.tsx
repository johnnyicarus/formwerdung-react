import React, { FunctionComponent } from 'react'
import { jsx } from '@emotion/core'
import styled, { css } from 'astroturf'
import Img, { FluidObject } from 'gatsby-image'

import { fullscreenImage } from '../../utils/style'

interface Props {
  fluid: FluidObject
}

export const ImageContentWrapper = styled('div')`
  @apply px-1x;
`
export const ImageContainer = styled('div')`
  @apply absolute top-0 w-full h-full bg-black-transparent;
`
export const Image: FunctionComponent<Props> = ({ fluid }) => (
  <Img
    fluid={fluid}
    className="absolute top-0 left-0 w-full h-full"
    css={css`
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `}
  />
)