/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro'
import React from 'react'

export const TextContainer = styled('div')`
  ${tw`px-1x md:w-3/5 xl:w-1/2 pt-1x md:pt-2x`};
`
export const SubTitle = styled('h2')`
  ${tw`leading-3 text-2xl`};
`
export const Graf = ({ children }) => (
  <p css={tw`pb-1x m-0`}>{children}</p>
)
