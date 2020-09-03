import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionPageContainer from '../collection/collection.container'
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview-container'

import { ShopPageContainer } from './shop.styles'


export const ShopPage = ({  fetchCollectionsStart, match }) =>  {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])


    return (
        <ShopPageContainer>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionOverviewContainer}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} 
            />
        </ShopPageContainer>
    )
}

const mapDistpatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDistpatchToProps)(ShopPage)