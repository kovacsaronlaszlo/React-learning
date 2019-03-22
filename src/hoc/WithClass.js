import React, { Component } from 'react';

const WithClass = (props) => (
    <div className={props.classes}>
    {props.children}
    </div>
);

export default WithClass;