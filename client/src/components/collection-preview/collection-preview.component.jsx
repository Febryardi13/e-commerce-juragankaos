import React from 'react';
import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'

import {
    CollectionPreviewContainer,
    TittleContainer,
    PreviewContainer
} from './collection-preview.styles'

export const CollectionPreview = ({ title, history, match, items, routeName }) => (
    <CollectionPreviewContainer>
        <TittleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
            {title.toUpperCase()}
        </TittleContainer>
        <PreviewContainer>
            {
                items
                .filter((item, index) => index < 4)
                .map(item => (
                   <CollectionItem key={item.id} item={item}/>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default withRouter (CollectionPreview)