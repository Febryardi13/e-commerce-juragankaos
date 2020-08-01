import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import {
    CollectionPreviewContainer,
    TittleContainer,
    PreviewContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TittleContainer>{title.toUpperCase()}</TittleContainer>
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

export default CollectionPreview