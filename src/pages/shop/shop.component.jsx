import React from 'react';
import { Route } from 'react-router-dom';
import ShopHeader from '../../components/pageheader/shop-header.component';
import Footer from '../../components/footer/footer.component'; 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <ShopHeader />
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    <Footer />
  </div>
);

export default ShopPage;