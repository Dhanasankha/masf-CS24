import React from 'react';
import AppbarContorller from '../../components/Appbar/AppbarContorller';
import DataFormViewContorller from '../../components/DataForm/DataFormContorller';

import SingUpContorller from '../../components/SingUp/SingUpContorller';

const BaseView = () => {
    return (
        <>
        <DataFormViewContorller/>
        <AppbarContorller/>
        </>
    );
};

export default BaseView;