import React, { useContext, useEffect } from 'react';
import BusinessContext from '../context/businessContext'
import BusinessItem from './BusinessItem'

const Business = () => {
  const businessContext = useContext(BusinessContext);
	const { businesses, getBusiness } = businessContext;
	useEffect(() => {
		getBusiness();
	}, []);
	return <div>{businesses.map((business) => <BusinessItem business={business} />)}</div>;
}
export default Business
