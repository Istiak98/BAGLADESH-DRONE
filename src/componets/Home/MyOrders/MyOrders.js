import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [drones, setDrones] = useState([]);
    const [found, setFound] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        const url = `https://tranquil-plains-35844.herokuapp.com/myOrders/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    useEffect(() => {
        const url = `https://tranquil-plains-35844.herokuapp.com/drones`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDrones(data);
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        const found = [];
        drones.forEach(drone => {
            myOrders.forEach(order => {
                if (order.order === drone._id) {
                    const newObj = drone;
                    newObj.orderId = order._id;
                    newObj.status = order.status;
                    newObj.date = order.date;
                    // console.log(newObj);
                    found.push(newObj)
                }
            })
        })
        setFound(found);
        setLoading(false);
    }, [drones, myOrders])

    const handleCancelOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            const url = `https://tranquil-plains-35844.herokuapp.com/deleteOrder/${id}`;
            
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfullly canceled !!?!!')
                        const reamainingServices = found.filter(service => service.orderId !== id)
                        setFound(reamainingServices);
                    }
                })
        }

    }

    return (
        <Container className='mt-5'>
            <Row lg={3} className="g-4">
                {
                    !loading ?
                        found.map(drone => <Order
                            key={drone._id}
                            drone={drone}
                            handleCancelOrder={handleCancelOrder}
                        ></Order>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </Container>
    );
};

export default MyOrders;