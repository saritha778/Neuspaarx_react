import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex align-items-center" style={{ height: '900px' }}>
          <div className="w-50 p-4">
            <h3>Unleash the Power of AI transforming the Future through Innovation and Intelligence</h3>
            <p>This is the text section of the first slide.</p>
          </div>
          <div className="w-50">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2MzI1OTc1NTk&ixlib=rb-1.2.1&q=80&w=400"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center" style={{ height: '900px' }}>
          <div className="w-50 p-4">
          <h3>Unleash the Power of AI transforming the Future through Innovation and Intelligence</h3>
          <p>This is the text section of the first slide.</p>
          </div>
          <div className="w-50">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2MzI1OTc1NTk&ixlib=rb-1.2.1&q=80&w=400"
              alt="Second slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center" style={{ height: '900px' }}>
          <div className="w-50 p-4">
          <h3>Unleash the Power of AI transforming the Future through Innovation and Intelligence</h3>
          <p>This is the text section of the first slide.</p>
          </div>
          <div className="w-50">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG5hdHVyZXxlbnwwfHx8fDE2MzI1OTc1NTk&ixlib=rb-1.2.1&q=80&w=400"
              alt="Third slide"
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerSection;
