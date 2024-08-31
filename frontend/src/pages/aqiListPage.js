import React from 'react';
import Header from '../components/aqiList/Header';
import AQIForm from '../components/aqiList/AQIForm';
import AQIList from '../components/aqiList/AQIList';
import AQIInfoTable from '../components/aqiList/AQIInfoTable';

const AQIListPage = () => {
  return (
    <>
        <Header />
        <AQIForm />
        <AQIList />
        <AQIInfoTable />
    </>
  )
}

export default AQIListPage;
