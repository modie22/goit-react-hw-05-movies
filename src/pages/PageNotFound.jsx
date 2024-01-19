import React from 'react'
import { NotFoundDescr, NotFoundDivStyle, NotFoundHomeBackLink, NotFoundTitle } from './Pages.styled'

const PageNotFound = () => {
  return (
    <NotFoundDivStyle>
    <NotFoundTitle>Couldn't find?</NotFoundTitle>
    <NotFoundDescr>We could not find this page. We can return to the main page.</NotFoundDescr>
    <NotFoundHomeBackLink to="/">Home</NotFoundHomeBackLink>
    </NotFoundDivStyle>
  )
}

export default PageNotFound
