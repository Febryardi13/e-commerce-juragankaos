import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

import { 
    CollectionContainer,
    TitleCollection,
    ItemsCollection
 } from './collection.styles'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return(
        <CollectionContainer>
            <TitleCollection>{title}</TitleCollection>
            <ItemsCollection>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </ItemsCollection>
        </CollectionContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect (mapStateToProps)(CollectionPage)