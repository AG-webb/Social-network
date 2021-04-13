import React from 'react';
import style from './Cars.module.css';
import { connect } from 'react-redux';

const Cars = (props) => {
    let cars = props.cars
        .map(car => <img key={car.id} src={car.src} alt="car"/>);

    return (
        <div className={style.wrapper}>
            {cars}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        cars: state.carsPage.cars,
    }
}

export default connect(mapStateToProps, {

})(Cars);