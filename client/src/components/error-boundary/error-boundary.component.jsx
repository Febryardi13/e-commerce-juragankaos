import React from 'react'

import {
    ErrorImageContainer,
    ErrorImageText,
    ErrorImageOverlay
} from './error-boundary.styles'

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasErrored: false
        }
    }


   static getDerivedStateFromError(error) {
       return { hasErrored: true }
   }

   componentDidCatch(error, info){
    console.log(error)
   }

   render() {
       if(this.state.hasErrored) {
           return (
               <ErrorImageOverlay>
                   <ErrorImageContainer imageUrl='https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg' />
                   <ErrorImageText>Sorry this page is broken</ErrorImageText>
               </ErrorImageOverlay>
           )
       }

       return this.props.children
   }
}

export default ErrorBoundary