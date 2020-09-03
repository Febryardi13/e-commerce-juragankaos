import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.action'

import { 
    CollectionItemContainer,
    CollectionImage,
    CollectionFooter,
    CollectionName,
    CollectionPrice,
    AddButton
 } from './collection-item.styles'

export const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <CollectionImage
                className='image'
                imageUrl={imageUrl}
            />
            <CollectionFooter>
            <CollectionName>{name}</CollectionName>
            <CollectionPrice>${price}</CollectionPrice>
            </CollectionFooter>
            <AddButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect (null, mapDispatchToProps) (CollectionItem)

