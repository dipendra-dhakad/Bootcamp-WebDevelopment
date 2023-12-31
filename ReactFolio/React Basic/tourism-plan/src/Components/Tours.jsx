import React from 'react'
import Card from './Card';
const Tours = ({tours ,removeTour}) => {

    // function removeHandler(id) {
    //     console.log(id);
    //     props.removeTours(id);
    // }

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Dip</h2>
            </div>
            <div className='cards'>
                {
                    // props.tours.map((tour) => {
                    //     return <Card {...tour} key={tour.id} removeTour={removeHandler} />;

                    tours.map((tour) =>{
                           return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                    
                }
            </div>
        </div>
    )
}

export default Tours;